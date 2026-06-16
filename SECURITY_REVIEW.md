# Pre-Launch Security Review — Digital Innovations

_Date: 2026-06-16 · Scope: defensive, production-readiness review of the
Digital Innovations web app (static front-end + managed Supabase backend)._

## Architecture summary (what's actually in scope)

This is a **static site** (HTML/CSS/JS) with **no custom backend server**:

- **Auth & data**: managed **Supabase** (Auth + Postgres with Row Level
  Security). `js/auth.js`, `js/supabase-config.js`, `admin.html`.
- **Text-to-speech**: the browser's **Web Speech API** (`js/tts.js`) — no
  paid TTS key.
- **News**: a weekly **GitHub Action** (`.github/workflows/update-news.yml`)
  runs `scripts/update-news.mjs` against **public RSS feeds** — no key.
- **No payments** anywhere; **no custom contact-form backend** (the
  `fluency.html` "email" link is a client-side `mailto:`).

This is a good baseline: **you did not roll your own auth or payments**
(item 8). Supabase is the trusted service doing the heavy lifting, and the
admin dashboard correctly leans on database RLS rather than client checks.
The findings below are about *configuration and one data-exposure trap*, not
a broken architecture.

---

## 🔴 Critical — fix before launch

### C1. Leaderboard can over-expose every pupil's data (access control + child-data privacy)

`js/app.js:2149-2150` (`renderLeaderboard`) runs:

```js
_sb.from('profiles').select('user_id, display_name')   // ALL rows
_sb.from('progress').select('user_id, data')           // ALL rows
```

Under the **documented** RLS (`SETUP.md`), `progress`/`profiles` are
**own-row + admin only**, so for a normal pupil these queries return *only
their own row* — meaning the leaderboard is **silently broken** (shows only
you). The dangerous part is the "fix" a developer reaches for to make it
work: a permissive policy such as `FOR SELECT USING (true)` on `progress`.
That would let **any signed-in pupil read every other pupil's entire
`progress.data` JSON** (completion, quiz scores, streaks, XP) plus every
display name — a direct "one user can request another user's data" bug, and
a safeguarding/data-protection issue because the users are children.

**Action:** Before launch, open Supabase → **Database → Policies** and
confirm there is **no broad `SELECT` policy** on `progress` or `profiles`.
- If the live leaderboard currently shows classmates, you already have an
  over-sharing policy — **remove it**.
- Serve the leaderboard through a `SECURITY DEFINER` function that returns
  **only** opted-in `display_name` + weekly XP (see safe steps below).

### C2. The @haileybury.com restriction is only enforced in JavaScript

The domain check lives in `js/auth.js` (`authSignUp`/`authSignIn`,
`emailDomainOk`). The Supabase **anon key is public by design** (it's in
`js/supabase-config.js`), so anyone can call the Supabase Auth/REST API
directly and **bypass the JS check entirely** — creating non-school
accounts, consuming your Auth quota, and seeding `profiles`/`progress`.

The only *hard*, server-side gate is the `enforce_email_domain` trigger —
which `SETUP.md:73-93` currently marks **"(Recommended)"** and optional.

**Action:** Make that trigger **mandatory** and confirm it is applied in the
live project (Supabase → SQL Editor). Treat the JS domain checks as UX only,
not security.

### C3. Confirm email verification is actually enforced

`submitSignup` tells users "Check your email to confirm" (`js/auth.js:351`),
which implies confirmation is intended — but whether sign-in is *blocked*
until confirmation is a **dashboard toggle**, not something the code can
guarantee. If it's off, an attacker can sign in with an unconfirmed (or
someone else's) address.

**Action:** Supabase → **Authentication → Providers → Email** → ensure
**"Confirm email"** is **ON**.

---

## 🟠 Medium — fix this week

### M1. Rate limiting / bot protection
You inherit Supabase's built-in auth rate limits — verify the defaults
haven't been raised, and **enable CAPTCHA** (hCaptcha/Turnstile) under
**Authentication → Bot & Abuse Protection** to blunt credential-stuffing and
email/quota exhaustion on signup, login, and (if you add it) password reset.
No custom expensive API routes or contact forms exist, so this is the whole
rate-limit surface.

### M2. All progress is client-asserted
`progress.data` is free-form JSONB written wholesale by the client
(`js/auth.js:248-263`). A pupil can set any XP, mark every lesson complete,
or fake quiz scores. Fine for low-stakes gamification, but the **admin
dashboard stats, leaderboard, and certificates are therefore spoofable** —
do not treat them as authoritative records (e.g. for grading). The
certificates (`verify.html`) already disclose they are "civility-level, not
cryptographic," which is the right framing.

### M3. Privacy notice contradicts behaviour (reflections)
`SETUP.md` ("Privacy" row) says private notes/reflections "stay local," but
reflections **are synced to Supabase** (`js/app.js:468`) and are readable by
admins in the dashboard (`admin.html` Reflections tab). For a children's
app this matters for transparency/ICO obligations.
**Action:** align the privacy notice with reality — teachers can read pupil
reflections — and reflect that in any parent/pupil privacy statement.

### M4. Escape dynamic content consistently
Dynamic strings (news headlines from admin/RSS, leaderboard names) are
injected via `innerHTML`. Today the exposure is small (news is admin-write
only; RSS is tag-stripped in `update-news.mjs`; the leaderboard strips
`<>&"'`), but standardise on HTML-escaping (like `verify.html`'s `esc()`)
for any server-or-user-sourced string rendered with `innerHTML`.

---

## 🟡 Low / configuration

- **HTTPS / TLS 1.2+**: provided by your static host. Confirm the host forces
  HTTPS, enables **HSTS**, and negotiates **TLS ≥ 1.2** (GitHub Pages /
  Netlify / Cloudflare Pages all do by default).
- **SPF / DMARC / DKIM**: Supabase sends auth emails from **its own** domain
  by default, so your school domain's SPF/DMARC is **only relevant if you
  configure custom SMTP**. If you set a custom sender on `haileybury.com`,
  add SPF + DKIM + a DMARC policy. Otherwise N/A.
- **DNSSEC**: only relevant if you put the site on a custom domain — enable
  it at your DNS provider if so.
- **Password policy**: minimum is 6 chars (`js/auth.js:346`). Raise to 8+ in
  Supabase, or steer staff/pupils to Google SSO (the stronger path).
- **No in-app password reset** (no `resetPasswordForEmail`). Minor UX gap;
  add one for email/password accounts or rely on Google SSO.
- **Admin email list** in `supabase-config.js` (`ADMIN_EMAILS`) is correctly
  documented as a UI hint only — the real gate is `profiles.is_admin` via RLS
  (`admin.html:654-676`). No change needed.

---

## Exact files / settings to inspect

| Where | What to check |
|---|---|
| Supabase → Auth → Providers → Email | "Confirm email" **ON**; allowed domains set (C3) |
| Supabase → Auth → Bot & Abuse Protection | CAPTCHA on; rate limits at defaults (M1) |
| Supabase → Database → Policies | **No broad `SELECT`** on `progress`/`profiles` (C1) |
| Supabase → SQL Editor | `enforce_email_domain` trigger present (C2) |
| `js/app.js:2140-2186` | Leaderboard reads all rows — move to RPC (C1) |
| `js/auth.js` | Client-side domain checks = UX only, not a boundary (C2) |
| `admin.html:654-676` | Admin gate (relies on RLS — correct) |
| `SETUP.md:73-93` + Privacy row | Make trigger mandatory (C2); fix privacy claim (M3) |

---

## Safe implementation steps

**C1 — replace the leaderboard read with a locked-down RPC** (run in SQL
Editor, then call it from the client):

```sql
-- 1. Make sure nothing over-shares these tables:
--    (review existing policies; there should be NO "USING (true)" SELECT
--     policy on progress or profiles)

-- 2. Expose only what the leaderboard needs, for opted-in pupils only:
CREATE OR REPLACE FUNCTION public.leaderboard()
RETURNS TABLE (display_name text, week_xp int)
LANGUAGE sql SECURITY DEFINER STABLE
SET search_path = public AS $$
  SELECT p.display_name,
         GREATEST(
           0,
           COALESCE((pr.data->'xp'->>'total')::int, 0)
           - COALESCE((pr.data->'xp_week_start'->>'xpAtStart')::int, 0)
         ) AS week_xp
  FROM public.progress pr
  JOIN public.profiles p ON p.user_id = pr.user_id
  WHERE (pr.data->>'leaderboard_opt_in') = 'true'
  ORDER BY week_xp DESC
  LIMIT 10;
$$;

REVOKE ALL ON FUNCTION public.leaderboard() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.leaderboard() TO authenticated;
```

Then in `js/app.js`, replace the two `from('profiles')/from('progress')`
selects with `const { data } = await _sb.rpc('leaderboard');` (mirror your
existing Monday-baseline logic inside the function if you want exact weekly
reset semantics). This way the database, not RLS-permissiveness, decides what
leaves the server — pupils can never read each other's full progress.

**C2 — make the domain gate server-side (mandatory):**

```sql
CREATE OR REPLACE FUNCTION public.enforce_email_domain()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF lower(new.email) NOT LIKE '%@haileybury.com' THEN
    RAISE EXCEPTION 'Only @haileybury.com accounts are allowed.';
  END IF;
  RETURN new;
END; $$;

DROP TRIGGER IF EXISTS enforce_email_domain ON auth.users;
CREATE TRIGGER enforce_email_domain
  BEFORE INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.enforce_email_domain();
```

**C3 / M1** — dashboard toggles only: turn on "Confirm email" and CAPTCHA,
verify rate-limit defaults.

---

## Ship / do not ship

**DO NOT SHIP yet** — but you are close, and the blockers are quick
config/SQL changes, not rewrites.

Resolve the three criticals first:
1. **C1** — verify live RLS and move the leaderboard to a `SECURITY DEFINER`
   RPC so one pupil can never read another's data.
2. **C2** — apply the `enforce_email_domain` trigger (make it mandatory).
3. **C3** — confirm email verification is enforced.

Then ship, and clear the medium items within the week. The underlying
choices — managed Supabase auth, RLS-enforced admin access, browser-native
TTS, no homegrown auth/payments, no exposed paid keys — are sound.

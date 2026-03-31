# Supabase Setup Guide

Follow these steps once to enable login, progress sync, and the admin dashboard.
Everything runs on Supabase's **free tier** — no credit card required.

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up / log in.
2. Click **New project**.
3. Choose a name (e.g. `digital-innovations`), set a strong database password, and pick the **EU West** region (closest to Haileybury).
4. Wait ~2 minutes for the project to provision.

---

## 2. Get your API credentials

1. In your project, go to **Settings → API**.
2. Copy:
   - **Project URL** — looks like `https://xxxxxxxxxxxx.supabase.co`
   - **anon / public key** — the long JWT string under "Project API keys"
3. Open `js/supabase-config.js` and paste them in:

```js
const SUPABASE_URL      = 'https://xxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

4. Add your own teacher email to `ADMIN_EMAILS`:

```js
const ADMIN_EMAILS = ['yourname@haileybury.com'];
```

---

## 3. Restrict sign-ups to @haileybury.com

1. Go to **Authentication → Providers → Email**.
2. Under **"Allowed email domains"**, add: `haileybury.com`
3. Save. (Non-Haileybury addresses will be rejected at the Supabase level too.)

---

## 4. Run the database schema

1. Go to **SQL Editor** in your Supabase dashboard.
2. Click **New query**, paste the SQL below, and click **Run**.

```sql
-- ── Profiles table (one row per user) ──────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  user_id      UUID        REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email        TEXT        NOT NULL,
  display_name TEXT,
  is_admin     BOOLEAN     NOT NULL DEFAULT false,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Progress table (one row per user, all progress as JSON) ─────────
CREATE TABLE IF NOT EXISTS public.progress (
  user_id    UUID        REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  data       JSONB       NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Row Level Security ──────────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- Students can read/write their own progress
CREATE POLICY "Own progress" ON public.progress
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Students can read their own profile
CREATE POLICY "Own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

-- Admins can read all profiles
CREATE POLICY "Admin read profiles" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.user_id = auth.uid() AND p.is_admin = true
    )
  );

-- Admins can read all progress
CREATE POLICY "Admin read progress" ON public.progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.user_id = auth.uid() AND p.is_admin = true
    )
  );

-- ── Auto-create profile on sign-up ─────────────────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 5. Grant yourself admin access

After you sign up through the course (or admin page) for the first time:

1. Go to **SQL Editor** and run:

```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'yourname@haileybury.com';
```

2. You can now access `admin.html` and see all student progress.

---

## 6. Test it

1. Open `index.html` in a browser.
2. Click **☁️ Sign In** in the top nav.
3. Create an account with your `@haileybury.com` email.
4. Confirm via the email link Supabase sends.
5. Sign back in — you'll see **☁️ Saved** appear after completing a lesson.
6. Open `admin.html` to see the dashboard.

---

## How it works (for reference)

| Feature | How |
|---|---|
| Login is optional | If not signed in, the course uses localStorage only |
| Progress sync | Every save (lesson complete, quiz, XP) syncs to Supabase after 3 seconds |
| Merge on login | When a student signs in, remote + local progress is merged — the larger value wins |
| Admin dashboard | Reads `profiles` + `progress` tables; only visible to `is_admin = true` accounts |
| Privacy | Teachers see completion stats and XP only — private notes/reflections stay local |
| Offline | The service worker caches all course files; the course works fully offline without login |

---

## Updating admin emails

Edit `js/supabase-config.js` and add emails to `ADMIN_EMAILS`. Also run the SQL above to set `is_admin = true` in the database for each teacher.

---

## Free tier limits

| Resource | Free limit | Typical class usage |
|---|---|---|
| Database rows | 500 MB | ~1 KB per student — handles thousands of students |
| Auth users | 50,000 | Well within a school's needs |
| API requests | 500,000 / month | ~200 requests per student per month |

/* ─────────────────────────────────────────────────────────────────
   SUPABASE CONFIGURATION
   ───────────────────────────────────────────────────────────────── */

const SUPABASE_URL      = 'https://oijjoczegdqddoyphqzs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2azvZbEyre8ys2JBq1ErXw_TiC0GDwQ';

/* School email domain — sign-ups from other domains are rejected */
const ALLOWED_DOMAIN = 'haileybury.com';

/* Admin emails — acts as an OFFLINE hint only.
   The real admin gate is the profiles.is_admin column, enforced by
   Supabase RLS policies in admin.html. To grant admin access, run:
     UPDATE public.profiles SET is_admin = true WHERE email = 'x@y.z';
   Adding an email here just avoids a one-frame flash of the nav link
   before the live is_admin check returns. */
const ADMIN_EMAILS = [
  't.wade@haileybury.com',
];

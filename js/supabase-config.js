/* ─────────────────────────────────────────────────────────────────
   SUPABASE CONFIGURATION
   ───────────────────────────────────────────────────────────────── */

const SUPABASE_URL      = 'https://oijjoczegdqddoyphqzs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2azvZbEyre8ys2JBq1ErXw_TiC0GDwQ';

/* School email domain — sign-ups from other domains are rejected */
const ALLOWED_DOMAIN = 'haileybury.com';

/* Admin emails — these accounts can access admin.html
   You also need to run: UPDATE public.profiles SET is_admin = true
   WHERE email = 't.wade@haileybury.com';  (see SETUP.md step 5)  */
const ADMIN_EMAILS = [
  't.wade@haileybury.com',
];

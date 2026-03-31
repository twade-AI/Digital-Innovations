/* ─────────────────────────────────────────────────────────────────
   SUPABASE CONFIGURATION
   Follow SETUP.md to create your free Supabase project, then replace
   the two placeholder values below with your project's credentials.
   ───────────────────────────────────────────────────────────────── */

const SUPABASE_URL      = 'YOUR_SUPABASE_URL';       // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // safe to expose in client code

/* School email domain — sign-ups from other domains are rejected */
const ALLOWED_DOMAIN = 'haileybury.com';

/* Admin emails — users listed here gain access to admin.html
   You also need to set is_admin = true in your Supabase profiles table
   for each address (see SETUP.md).                                  */
const ADMIN_EMAILS = [
  'teacher@haileybury.com',   // replace with real teacher email(s)
];

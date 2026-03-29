-- Create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.contact_submissions enable row level security;

-- Policy: Anyone can insert contact submissions
create policy "Anyone can submit contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- Policy: No one can read contact submissions (admin only via service role)
create policy "No public read access"
  on public.contact_submissions
  for select
  to anon, authenticated
  using (false);

-- Create index for faster queries
create index if not exists contact_submissions_created_at_idx 
  on public.contact_submissions(created_at desc);
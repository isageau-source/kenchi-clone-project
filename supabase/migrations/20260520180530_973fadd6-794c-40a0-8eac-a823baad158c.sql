
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  firstname TEXT NOT NULL,
  surname TEXT,
  phone TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'call_back_form',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit a lead
CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read leads (admin view via dashboard or future admin UI)
CREATE POLICY "Authenticated users can view leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (true);

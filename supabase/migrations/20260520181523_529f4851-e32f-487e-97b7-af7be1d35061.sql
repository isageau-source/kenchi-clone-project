-- Add extra lead-capture columns to support quote and contact forms
ALTER TABLE public.leads
  ADD COLUMN email TEXT,
  ADD COLUMN suburb TEXT,
  ADD COLUMN message TEXT;

-- Update RLS policies to remain permissive for inserts (already open)
-- No policy changes needed; existing INSERT policy covers new columns.
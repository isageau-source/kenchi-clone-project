-- Remove the overly permissive authenticated SELECT policy on leads
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;
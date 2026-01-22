-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Admins can read quote requests" ON public.quote_requests;

-- Create a proper PERMISSIVE SELECT policy that only allows admins
CREATE POLICY "Admins can read quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
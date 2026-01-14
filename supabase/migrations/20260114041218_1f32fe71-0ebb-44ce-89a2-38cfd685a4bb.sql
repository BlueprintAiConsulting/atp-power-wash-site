-- Drop all existing policies on quote_requests
DROP POLICY IF EXISTS "Admins can read quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Admins can update quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Anyone can submit quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "No deletes allowed" ON public.quote_requests;

-- Create PERMISSIVE SELECT policy - only authenticated admins can read
-- With only this policy, unauthenticated/non-admin users are denied by default
CREATE POLICY "Admins can read quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create PERMISSIVE UPDATE policy - only authenticated admins can update
CREATE POLICY "Admins can update quote requests"
ON public.quote_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create PERMISSIVE INSERT policy - anyone can submit quotes (public form)
-- Target both anon and authenticated roles
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create PERMISSIVE DELETE policy - no one can delete
CREATE POLICY "No deletes allowed"
ON public.quote_requests
FOR DELETE
TO authenticated
USING (false);
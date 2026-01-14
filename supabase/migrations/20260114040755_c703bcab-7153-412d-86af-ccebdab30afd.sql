-- Drop the existing RESTRICTIVE SELECT policy
DROP POLICY IF EXISTS "Admins can read quote requests" ON public.quote_requests;

-- Create a PERMISSIVE SELECT policy for admins (this grants access only to admins)
-- With RLS enabled and only this PERMISSIVE policy, non-admins get denied by default
CREATE POLICY "Admins can read quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop the existing RESTRICTIVE UPDATE policy  
DROP POLICY IF EXISTS "Admins can update quote requests" ON public.quote_requests;

-- Create a PERMISSIVE UPDATE policy for admins
CREATE POLICY "Admins can update quote requests"
ON public.quote_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop and recreate the INSERT policy as PERMISSIVE (for public form submission)
DROP POLICY IF EXISTS "Anyone can submit quote requests" ON public.quote_requests;

CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Drop and recreate the DELETE policy as PERMISSIVE (deny all)
DROP POLICY IF EXISTS "No deletes allowed" ON public.quote_requests;

CREATE POLICY "No deletes allowed"
ON public.quote_requests
FOR DELETE
TO authenticated
USING (false);
-- Add explicit UPDATE policy to block all updates from client roles
CREATE POLICY "No updates allowed" 
ON public.quote_requests 
FOR UPDATE 
USING (false);

-- Add explicit DELETE policy to block all deletes from client roles
CREATE POLICY "No deletes allowed" 
ON public.quote_requests 
FOR DELETE 
USING (false);
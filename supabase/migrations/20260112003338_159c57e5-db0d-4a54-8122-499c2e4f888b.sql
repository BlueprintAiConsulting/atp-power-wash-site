-- Ensure row level security is enabled (idempotent)
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Explicitly deny all reads from client roles (prevents accidental exposure if privileges/policies change)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'quote_requests'
      AND policyname = 'No public read access'
  ) THEN
    EXECUTE 'CREATE POLICY "No public read access" ON public.quote_requests FOR SELECT USING (false);';
  END IF;
END$$;
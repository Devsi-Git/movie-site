import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jlsxjlpmvakhxcvixqcz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsc3hqbHBtdmFraHhjdml4cWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNTMyOTcsImV4cCI6MjA3NDYyOTI5N30.5jCOpKS1OiOIi4ivfhcnuARM7JSEnn4_USu3t8-nLA0";
export const supabase = createClient(supabaseUrl, supabaseKey);

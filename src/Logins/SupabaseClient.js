
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vtchxmolxwfpiejbabvg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Y2h4bW9seHdmcGllamJhYnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDEzNDgsImV4cCI6MjA2NjY3NzM0OH0.bWFqrwSE5MCqlO9vIy3UXhkguCD2GWrTBEpal5pc9NM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.com/dashboard/project/lhvodkxnyvvljzosontq';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxodm9ka3hueXZ2bGp6b3NvbnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1ODMxMDcsImV4cCI6MjEwNjE1OTEwN30.NEnSZY51tV4qAssVj69IVtTe3VhW-WcSM6TBMDNoXHs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
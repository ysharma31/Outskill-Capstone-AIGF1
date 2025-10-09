import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hzsadtdwirisbsiwmijt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2FkdGR3aXJpc2JzaXdtaWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDY0NjgsImV4cCI6MjA3NTE4MjQ2OH0.oXoxLgO1WDcg65axRiLo2axVJPICla48mD_t41hKFh8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

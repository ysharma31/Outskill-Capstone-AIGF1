import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smhmuegdoucznluneftm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaG11ZWdkb3Vjem5sdW5lZnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MjMxNTYsImV4cCI6MjA3NTQ5OTE1Nn0.dBcCg_esHz5UbHyAaccYUUlZevcykXzL6Cnb-2PltZ8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

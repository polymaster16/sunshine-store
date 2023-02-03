import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hyczxbizyvhpfijbzvua.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5Y3p4Yml6eXZocGZpamJ6dnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0MTUxMDQsImV4cCI6MTk4NTk5MTEwNH0.g-V5w9usL5v9okFBGbwFJjh0faYW_glc4rvnCPgJ1Vk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

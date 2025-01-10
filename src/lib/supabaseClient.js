import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://bhkltmkuwtkidzttmrfb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2x0bWt1d3RraWR6dHRtcmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NDc4NTMsImV4cCI6MjA1MjEyMzg1M30.Wjc0uRa53RCCvA_9Fc-Lx3jlqLH5wIT14ygVJmQ4Qls')
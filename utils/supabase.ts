import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabase.url
  const supabaseKey = config.public.supabase.key
  
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  return { supabase }
} 
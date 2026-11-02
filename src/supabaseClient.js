import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mcnedaxxfxbaubbxuoda.supabase.co'
const supabaseAnonKey = 'sb_publishable_HFVQN_aaQTpjWwxnWo12PA_oXAIfEDh'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gayyrimyqdiimcvlqcxn.supabase.co';
const supabaseKey = 'sb_publishable_hLsbnyjNZ99OP7gE6bdIvw_oiuJIOBz';

export const supabase = createClient(supabaseUrl, supabaseKey);

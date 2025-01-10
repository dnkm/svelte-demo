import { clubs } from '$lib/clubs';
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
  let { data } = await supabase.from("clubs").select("*").eq("id", params.clubid).maybeSingle()

  return ({
    club: data
  })
}
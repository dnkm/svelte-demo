import { clubs } from "$lib/clubs";
import { supabase } from "$lib/supabaseClient";

export async function load() {

  const { data } = await supabase.from("clubs").select("id, name")

  return ({
    clubs: data
  })
}
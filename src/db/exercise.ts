import { supabase } from "./client";

export async function getAllByPractice(id_practice: unknown) {
  let { data: PRACTICE, error } = await supabase
    .from("EXERCISE")
    .select("*")
    .eq("id_practice", id_practice)
    .order("order", { ascending: false })


    if (!error && PRACTICE != null) return PRACTICE;
    else console.error("getAllByPractice::error =>" + error?.message);


  return [];
}

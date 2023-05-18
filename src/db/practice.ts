import { supabase } from "./client";

export async function getAll() {
  let { data: PRACTICE, error } = await supabase.from("PRACTICE").select("*");
  if (!error && PRACTICE != null) return PRACTICE;

  return [];
}

export async function getPagination() {
  let { data, error } = await supabase.from("PRACTICE").select("*").range(0, 9);

  if (!error && data != null) return data;

  return [];
}

export async function getByChild(id_child: unknown) {

  const { data, error } = await supabase
    .from("EVALUATION")
    .select("created_at , evaluated_at, id_evaluation, id_child, PRACTICE(*)")
    .eq("id_child", id_child);

  if (!error && data != null) return data;

  return [];
}

export async function insert() {
  let { data, error } = await supabase.from("PRACTICE").select("*");

  if (!error && data != null) return data;

  return [];
}

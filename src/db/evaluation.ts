import { supabase } from "./client";

export async function getById(id_evaluation: unknown) {
  const { data, error } = await supabase
    .from("EVALUATION")
    .select("created_at , evaluated_at, id_evaluation, id_child, id_practice")
    .eq("id_evaluation", id_evaluation)
    .limit(1)
    .single();

  if (!error && data != null) return data;

  return;
}

//TODO: Mandar true o false al momento de la funcion para mostrar el check o no
export async function insertDetail(idExercise: number, idEvaluation: number) {
  const { data, error } = await supabase
    .from("EVALUATION_DETAIL")
    .insert([
      {
        id_exercise: idExercise,
        id_evaluation: idEvaluation,
        transcription: "UwU",
        score: 0,
      },
    ]);
}

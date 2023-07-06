import { supabase } from "./client";

export async function uploadAudio(audioBlob: Blob) {
  console.log(audioBlob);
  const { data, error } = await supabase.storage
    .from("Audio")
    .upload("Audio/audio.wav", audioBlob, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) console.error(error);
  if (data) console.log(data);
}

export async function uploadAudioByEvaluation(
  idExercise: number,
  idChild: number,
  idEvaluation: number,
  audioBlob: Blob
) {
  console.log(audioBlob);
  const { data, error } = await supabase.storage
    .from("Audio")
    .upload("Evaluations/Child-"+idChild+"/evaluation-"+idEvaluation+"_exercise-"+idExercise+".wav", audioBlob, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) console.error(error);
  if (data) console.log(data);
}

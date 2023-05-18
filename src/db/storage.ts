import { supabase } from "./client";

export async function uploadAudio(audioBlob: FileBody) {
  console.log(audioBlob);
  const { data, error } = await supabase.storage
    .from("Audio")
    .upload("Audio/audio.wav", audioBlob, {
      cacheControl: "3600",
      upsert: false,
    });

  console.error(error);
  console.log(data);
}
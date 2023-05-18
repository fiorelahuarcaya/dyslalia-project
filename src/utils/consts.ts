export async function getApiKey() {
  const dotenv = (await import("dotenv")).default;
  dotenv.config();
  console.log( process.env.PUBLIC_SUPABASE_API_KEY);
  return process.env.PUBLIC_SUPABASE_API_KEY;
}


export async function getApiURL() {
  const dotenv = (await import("dotenv")).default;
  dotenv.config();
  
  return process.env.PULBIC_SUPABASE_URL;
}

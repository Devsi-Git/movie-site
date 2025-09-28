import { supabase } from "./initialize";

export async function getFilms() {
  const { data: films, error } = await supabase.from("films").select("*");

  if (error) {
    throw new Error("Something went wrong!!");
  }
  return films;
}

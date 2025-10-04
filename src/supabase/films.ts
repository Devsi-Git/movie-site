import { supabase } from "./initialize";

export async function getFilms() {
  const { data: films, error } = await supabase.from("films").select("*");

  if (error || !films) {
    throw new Error(error?.message);
  }
  return films;
}

export async function getFilmById(id: number) {
  const { data: film, error } = await supabase
    .from("films")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !film) {
    throw new Error(error?.message);
  }
  return film;
}

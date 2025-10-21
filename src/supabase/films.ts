import { supabase } from "./initialize";

export async function getFilms(
  searchParams: { [key: string]: string | undefined } = {}
) {
  let query = supabase.from("films").select("*");

  if (searchParams) {
    const params = await searchParams;
    const year = params.year;
    const rate = params.rate;

    if (year) {
      const [minYear, maxYear] = year.split("-").map(Number);
      query = query.gte("year", minYear).lte("year", maxYear);
    }

    if (rate) {
      const [minRate, maxRate] = rate.split("-").map(Number);
      query = query.gte("rate", minRate).lte("rate", maxRate);
    }
  }

  const { data: films, error } = await query;
  if (error || !films) {
    return [];
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
    return [];
  }
  return film;
}

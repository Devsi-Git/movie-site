import { PiFilmReel } from "react-icons/pi";
import { getFilms } from "@/supabase/films";
import FilmSlider from "./FilmSlider";
import FilterBar from "./FilterBar";
import FilmCard from "./FilmCard";

export default async function FilmSection({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const data = await getFilms(searchParams);
  const cards = data.map((f) => <FilmCard key={f.id} {...f} />);

  const params = await searchParams;
  const year = params?.year;
  const rate = params?.rate;

  return (
    <article className="flex flex-col items-center mt-12">
      <h3 className="flex items-center self-start gap-3 pl-[11%] max-lg:text-lg text-xl">
        <PiFilmReel />
        Series
      </h3>

      <span className="flex bg-[#6A6A6A] mt-2.5 mb-4.5 w-[79%] h-px" />

      <FilterBar rate={rate} year={year} />

      {data && data.length > 0 ? (
        <FilmSlider cards={cards} />
      ) : (
        <div className="my-30">Unfortunately nothing found!</div>
      )}
    </article>
  );
}

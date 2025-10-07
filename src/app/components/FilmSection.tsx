import { PiFilmReel } from "react-icons/pi";
import { getFilms } from "@/supabase/films";
import SortBtn from "./SortBtn";
import FilmSlider from "./FilmSlider";

export default async function FilmSection() {
  const data = await getFilms();

  return (
    <article className="flex flex-col items-center mt-12">
      <h3 className="flex items-center self-start gap-3 pl-[11%] max-lg:text-lg text-xl">
        <PiFilmReel />
        Series
      </h3>

      <span className="flex bg-[#6A6A6A] mt-2 mb-4 w-[79%] h-px" />

      <div className="flex justify-start items-center gap-5 w-[79%]">
        <span className="text-sm max-lg:text-xs pl-2.5"> Sort By </span>
        <SortBtn on={false} />
        <SortBtn on={true} />
        <SortBtn on={false} />
        <SortBtn on={false} />
      </div>

      <FilmSlider data={data} />
    </article>
  );
}

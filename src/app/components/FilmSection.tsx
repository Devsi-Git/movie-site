import { PiFilmReel } from "react-icons/pi";
import SortBtn from "./SortBtn";
import FilmBox from "./FilmCard";
import { getFilms } from "@/supabase/films";

export default async function FilmSection() {
  const data = await getFilms();

  return (
    <article className="flex flex-col items-center mt-12">
      <h3 className="flex items-center self-start gap-3 pl-[11%] text-xl">
        <PiFilmReel />
        Series
      </h3>

      <span className="flex bg-[#6A6A6A] mt-2 mb-4 w-[79%] h-px" />

      <div className="flex justify-start gap-5 w-[79%]">
        <SortBtn on={false} />
        <SortBtn on={true} />
        <SortBtn on={false} />
        <SortBtn on={false} />
        <SortBtn on={false} />
      </div>

      <div className="flex gap-10 my-10 w-full overflow-x-scroll no-scrollbar">
        {data.map((item) => {
          return <FilmBox key={item.id} data={{ ...item }} />;
        })}
      </div>
    </article>
  );
}

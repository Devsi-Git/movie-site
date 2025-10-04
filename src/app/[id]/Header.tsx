import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";

type FilmProps = {
  film: {
    id: number;
    name: string;
    pic: string;
    rate: number;
    year: number;
  };
};

export default function Header({ film }: FilmProps) {
  return (
    <header className="flex mt-28 justify-between w-[66%]">
      <div className="flex items-center gap-7">
        <h1 className="text-4xl">{film.name}</h1>

        <time
          dateTime={film.year.toString()}
          className="font-semibold pt-1 text-[#B4B4B4]"
        >
          {film.year}
        </time>
      </div>

      <div className="flex pt-2 gap-5">
        <span className="flex gap-0.5 items-center font-semibold text-[#f5d835]">
          <GoStarFill className="text-sm mb-0.5" />
          {film.rate}
        </span>

        <div className="relative w-6 items-center flex justify-center group">
          <GoHeart className="absolute transition-all text-xl group-hover:opacity-0" />
          <GoHeartFill className="absolute text-red-600 text-xl opacity-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </header>
  );
}

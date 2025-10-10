import Image from "next/image";
import Link from "next/link";
import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";

type FilmProps = {
  id: number;
  name: string;
  pic: string;
  rate: number;
  year: number;
};

export default function FilmCard({ id, name, pic, rate, year }: FilmProps) {
  return (
    <Link href={`/${id}`}>
      <section className="cursor-pointer rounded-lg relative items-center justify-center flex overflow-clip ">
        <div className="px-4 h-[253px] justify-center transition-all flex w-[170px] rounded-lg bg-[#000000bd] gap-4 opacity-0 transition-al flex-col items-center absolute hover:opacity-100">
          <h4 className="font-semibold text-sm text-center ">{name}</h4>

          <time
            className="text-sm font-semibold text-[#B4B4B4]"
            dateTime={year.toString()}
          >
            {year}
          </time>

          <div className="flex gap-6 items-center">
            <span className="flex gap-0.5 items-center text-sm  font-semibold text-[#f5d835]">
              <GoStarFill className="text-xs mb-0.5" />
              {rate}
            </span>
            <div className="relative w-6 pb-1 items-center flex justify-center group">
              <GoHeart className="absolute transition-all text-lg group-hover:opacity-0" />
              <GoHeartFill className="absolute text-red-600 text-lg opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>

        <Image
          className=" max-lg:w-[140px] max-md:w-[130px] h-auto"
          src={pic}
          alt={name}
          width={170}
          height={0}
        />
      </section>
    </Link>
  );
}

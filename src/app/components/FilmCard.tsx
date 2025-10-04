import Image from "next/image";
import Link from "next/link";
import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";

type FilmProps = {
  data: {
    id: number;
    name: string;
    pic: string;
    rate: number;
    year: number;
  };
};

export default function FilmBox({ data }: FilmProps) {
  return (
    <Link href={`/${data.id}`}>
      <section className="cursor-pointer relative overflow-clip ">
        <div className=" h-[253px] justify-center transition-all flex w-[170px] rounded-lg bg-[#000000bd] gap-4 opacity-0 transition-al flex-col items-center absolute hover:opacity-100">
          <h4 className="font-semibold">{data.name}</h4>

          <time
            className=" font-semibold text-[#B4B4B4]"
            dateTime={data.year.toString()}
          >
            {data.year}
          </time>

          <div className="flex gap-6 items-center">
            <span className="flex gap-0.5 items-center font-semibold text-[#f5d835]">
              <GoStarFill className="text-sm   mb-0.5" />
              {data.rate}
            </span>
            <div className="relative w-6 pb-1 items-center flex justify-center group">
              <GoHeart className="absolute transition-all text-xl group-hover:opacity-0" />
              <GoHeartFill className="absolute text-red-600 text-xl opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>

        <Image
          className=" min-w-[170px] h-auto"
          src={data.pic}
          alt={data.name}
          width={170}
          height={0}
        />
      </section>
    </Link>
  );
}

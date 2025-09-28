import Image from "next/image";
import { GoStarFill } from "react-icons/go";

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
    <section className="cursor-pointer relative overflow-clip group">
      <div className=" h-[253px] justify-center transition-all w-[170px] rounded-lg group-hover:bg-[#000000bd] gap-4 hidden transition-al flex-col items-center absolute group-hover:flex">
        <h4 className="font-semibold">{data.name}</h4>

        <time
          className=" font-semibold text-[#B4B4B4]"
          dateTime={data.year.toString()}
        >
          {data.year}
        </time>

        <span className="flex gap-1 items-center font-semibold text-[#f5d835]">
          <GoStarFill className="text-sm" />
          {data.rate}
        </span>
      </div>

      <Image
        className="w-[170px] min-w-[170px] h-auto"
        src={data.pic}
        alt={data.name}
        width={170}
        height={0}
      />
    </section>
  );
}

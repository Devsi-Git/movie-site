import { FaPlay } from "react-icons/fa";
import { GoPlus, GoStar, GoStarFill } from "react-icons/go";

export default function MainHeader() {
  return (
    <div className="space-y-2 mt-18 max-w-140">
      <div className="font-semibold text-[#B4B4B4] text-sm">
        ACTION - SCIENCE FICTION
      </div>

      <h2 className="font-zen text-6xl tracking-wide -black font">
        PACIFIC RIM
      </h2>

      <div className="flex items-center gap-2">
        <time className="font-semibold text-[#B4B4B4] text-sm" dateTime="2013">
          2013
        </time>

        <span className="flex bg-[#B4B4B4] w-px h-5" />
        <span className="bg-[#F2C400] px-1 rounded-[2px] font-semibold text-sm">
          12
        </span>

        <span className="flex bg-[#B4B4B4] w-px h-5" />
        <time
          className="font-semibold text-[#B4B4B4] text-sm"
          dateTime="PT131M"
        >
          2h 11min
        </time>
        <span className="flex bg-[#B4B4B4] w-px h-5" />

        <span className="flex gap-0.5">
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStar />
          <GoStar />
        </span>
      </div>

      <p className="py-2 font-light text-sm">
        Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut at
        duis non justo turpis. Enim interdum etiam feugiat egestas. Egestas
        ipsum in egestas tristique eget. Nibh elementum ultrices amet vel
        commodo aenean lectus fringilla morbi. Elit laoreet eu malesuada
        imperdiet nullam venenatis non nec. Mattis netus blandit morbi.
      </p>

      <div className="flex gap-5">
        <button className="flex items-center gap-2.5 bg-[#00ADEF] px-7 py-2 rounded-sm hover:scale-95 transition-all cursor-pointer">
          <FaPlay />
          <span className="text-lg">PLAY</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 text-[22px] hover:scale-95 transition-all cursor-pointer">
          <GoPlus />
          <span className="text-lg">MY LIST</span>
        </button>
      </div>
    </div>
  );
}

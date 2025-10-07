import { FaPlay } from "react-icons/fa";
import { GoPlus, GoStar, GoStarFill } from "react-icons/go";

export default function MainHeader() {
  return (
    <div className="space-y-2 mt-18 max-lg:mt-16 max-w-140">
      <div className="font-semibold text-[#B4B4B4] max-lg:text-xs text-sm  ">
        ACTION - SCIENCE FICTION
      </div>

      <h2 className="font-zen text-6xl max-lg:text-5xl max-md:text-[40px] tracking-wide -black font">
        PACIFIC RIM
      </h2>

      <div className="flex items-center gap-2">
        <time
          className="font-semibold text-[#B4B4B4] text-sm  max-lg:text-xs "
          dateTime="2013"
        >
          2013
        </time>

        <span className="flex bg-[#B4B4B4] w-px h-5" />
        <span className="bg-[#F2C400] px-1 rounded-[2px] font-semibold text-sm  max-lg:text-xs ">
          12
        </span>

        <span className="flex bg-[#B4B4B4] w-px h-5" />
        <time
          className="font-semibold text-[#B4B4B4] text-sm  max-lg:text-xs "
          dateTime="PT131M"
        >
          2h 11min
        </time>
        <span className="flex bg-[#B4B4B4] w-px h-5" />

        <span className="flex gap-0.5">
          <GoStarFill className="max-lg:text-sm" />
          <GoStarFill className="max-lg:text-sm" />
          <GoStarFill className="max-lg:text-sm" />
          <GoStar className="max-lg:text-sm" />
          <GoStar className="max-lg:text-sm" />
        </span>
      </div>

      <p className="py-2 font-light text-sm  max-lg:text-xs  leading-5">
        Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut at
        duis non justo turpis. Enim interdum etiam feugiat egestas. Egestas
        ipsum in egestas tristique eget. Nibh elementum ultrices amet vel
        commodo aenean lectus fringilla morbi. Elit laoreet eu malesuada
        imperdiet nullam venenatis non nec. Mattis netus blandit morbi.
      </p>

      <div className="flex  max-md:gap-4 gap-5">
        <button className="flex items-center gap-2.5 bg-[#00ADEF] max-md:px-5.5 max-md:py-1.5 px-7 py-2 rounded-sm hover:scale-95 transition-all cursor-pointer">
          <FaPlay className="max-lg:text-sm  max-md:text-xs" />
          <span className="text-lg max-lg:text-base  max-md:text-sm">PLAY</span>
        </button>
        <button className="flex items-center gap-1  px-3 py-1 hover:scale-95 transition-all cursor-pointer">
          <GoPlus className="max-lg:text-xl  text-[22px] " />
          <span className="text-lg max-lg:text-base max-md:text-sm">
            MY LIST
          </span>
        </button>
      </div>
    </div>
  );
}

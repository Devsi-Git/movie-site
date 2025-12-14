"use client";
import { filmContext } from "@/lib/filmContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GoStarFill } from "react-icons/go";

export default function SearchResult() {
  const { searchResult } = useContext(filmContext);
  return (
    <>
      {searchResult && searchResult.length > 0 && (
        <div className=" max-md:top-10 max-md:ml-1 h-80 max-md:absolute min-w-fit items-center ml-20 scroll-thin overflow-auto flex flex-col max-md:gap-3 gap-5">
          {searchResult.map((film) => (
            <Link
              className="bg-[#38383880] gap-5 max-md:gap-3 max-md:py-2 max-md:px-2 flex backdrop-blur-[2px] max-md:backdrop-blur-[5px]  px-4 py-3 w-[100%] h-20 rounded-xl "
              key={film.id}
              href={`/movie/${film.id}`}
            >
              <Image
                className=" object-cover rounded-xl w-[70px] h-auto"
                width={200}
                height={200}
                src={film.pic}
                alt={film.name}
              />
              <div className="space-y-1">
                <h3 className="max-md:text-sm ">{film.name}</h3>
                <div className=" flex max-md:gap-2 gap-3">
                  <time
                    className="text-sm max-md:text-xs font-semibold text-[#B4B4B4]"
                    dateTime={film.year.toString()}
                  >
                    {film.year}
                  </time>
                  <span className="flex gap-0.5 max-md:text-xs items-center text-sm  font-semibold text-[#f5d835]">
                    <GoStarFill className="text-xs mb-0.5" />
                    {film.rate}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {searchResult && searchResult.length == 0 && (
        <div className="ml-10 px-3 py-2 h-fit rounded-xl text-nowrap top-9 max-md:absolute max-md:text-sm bg-[#38383880] backdrop-blur-[2px]">
          Unfortunately nothing found!
        </div>
      )}
    </>
  );
}

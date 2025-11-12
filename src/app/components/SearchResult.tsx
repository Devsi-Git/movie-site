"use client";
import { filmContext } from "@/lib/filmContext";
import Image from "next/image";
import { useContext } from "react";
import { GoStarFill } from "react-icons/go";

export default function SearchResult() {
  const { searchResult } = useContext(filmContext);
  return (
    <>
      {searchResult && searchResult.length > 0 && (
        <div className="w-[40%] h-80 items-center scroll-thin overflow-auto flex flex-col gap-5">
          {searchResult.map((film) => (
            <div
              className="bg-[#38383880] gap-5 flex backdrop-blur-[2px] px-4 py-3 w-[90%] h-20 rounded-xl "
              key={film.id}
            >
              <Image
                className=" object-cover rounded-xl w-[70px] h-auto"
                width={200}
                height={200}
                src={film.pic}
                alt={film.name}
              />
              <div>
                <h3>{film.name}</h3>
                <div className=" flex  gap-3">
                  <time
                    className="text-sm font-semibold text-[#B4B4B4]"
                    dateTime={film.year.toString()}
                  >
                    {film.year}
                  </time>
                  <span className="flex gap-0.5 items-center text-sm  font-semibold text-[#f5d835]">
                    <GoStarFill className="text-xs mb-0.5" />
                    {film.rate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchResult && searchResult.length == 0 && (
        <div className="ml-10 px-3 py-2 h-fit rounded-xl bg-[#38383880] backdrop-blur-[2px]">
          Unfortunately nothing found!
        </div>
      )}
    </>
  );
}

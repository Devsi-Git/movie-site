"use client";
import { filmContext } from "@/lib/filmContext";
import { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";

export default function SearchBox() {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const { handleSearch } = useContext(filmContext);

  const debounceSearch = (searchParam: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      handleSearch(searchParam);
    }, 600);

    setTimer(newTimer);
  };

  return (
    <div className="flex items-center gap-3.5 bg-[#38383850] backdrop-blur-[2px] px-1.5 py-1.5 rounded-xs w-91 max-lg:w-81 max-md:w-71 max-lg:text-sm">
      <GoSearch className="ml-1 text-xl max-lg:text-lg max-md:text-base" />
      <input
        onChange={(e) => debounceSearch(e.target.value)}
        className="focus:outline-0 w-full placeholder:text-sm"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}

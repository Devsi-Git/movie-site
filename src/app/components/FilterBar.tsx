"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar({
  year,
  rate,
}: {
  year: string | undefined;
  rate: string | undefined;
}) {
  const router = useRouter();
  const toSetSearchParams = useSearchParams();

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(toSetSearchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-start items-center gap-5  max-[426px]:gap-2 max-md:gap-3 w-[79%]">
      <span className="text-sm max-lg:text-xs ml-8 max-[426px]:ml-5 text-nowrap">
        Year :
      </span>
      <div className="px-3 py-2 max-sm:px-0.5 max-sm:py-1 bg-gray-900 rounded-lg  ">
        <select
          value={year}
          className="cursor-pointer focus:outline-0  text-[15px] max-lg:text-[13px] pr-2 bg-gray-900  text-center "
          onChange={(e) => handleFilter("year", e.target.value)}
        >
          <option value="" className="text-sm">
            All
          </option>
          <option className="text-sm" value="2010-2015">
            2010 - 2015
          </option>
          <option className="text-sm" value="2015-2020">
            2015 - 2020
          </option>
          <option className="text-sm" value="2020-2025">
            2020 - 2025
          </option>
        </select>
      </div>

      <span className="text-sm max-lg:text-xs max-md:ml-4  max-[426px]:ml-3 ml-8 text-nowrap">
        Rate :
      </span>
      <div className="px-3 py-2 max-sm:px-0.5 max-sm:py-1 bg-gray-900 rounded-lg  ">
        <select
          value={rate}
          className="cursor-pointer focus:outline-0  text-[15px] max-lg:text-[13px] pr-2 bg-gray-900 text-center "
          onChange={(e) => handleFilter("rate", e.target.value)}
        >
          <option className="text-sm" value="">
            All
          </option>
          <option className="text-sm" value="0-4.5">
            0 - 4.5
          </option>
          <option className="text-sm" value="4.5-5.0">
            4.5 - 5.0
          </option>
        </select>
      </div>
    </div>
  );
}

import { GoSearch } from "react-icons/go";

export default function SearchBox() {
  return (
    <div className="flex items-center gap-3.5 bg-[#38383850] backdrop-blur-[2px] px-1.5 py-1.5 rounded-xs w-91 max-lg:w-81 max-md:w-71 max-lg:text-sm">
      <GoSearch className="ml-1 text-xl max-lg:text-lg max-md:text-base" />

      <input
        className="focus:outline-0 w-full placeholder:text-sm"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}
 
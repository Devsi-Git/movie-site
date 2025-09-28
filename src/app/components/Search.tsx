import { GoSearch } from "react-icons/go";

export default function Search() {
  return (
    <div className="flex items-center gap-3.5 bg-[#38383836] backdrop-blur-[2px] px-1.5 py-1.5 rounded-xs w-91">
      <GoSearch className="ml-1 text-xl" />

      <input
        className="focus:outline-0 w-full placeholder:text-sm"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}

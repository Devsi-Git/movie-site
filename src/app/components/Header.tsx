import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
  return (
    <header className="relative bg-[url('/background.png')] bg-cover h-[105vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000de] to-[#00000017] to-80%"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000d2] to-[#00000017] to-80%"></div>

      <div className="z-10 relative flex flex-col items-start gap-22">
        <Navbar />
        <div className="ml-26">
          <Search />
        </div>
      </div>
    </header>
  );
}

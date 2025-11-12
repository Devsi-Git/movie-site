import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function Header() {
  return (
      <header className="relative bg-[url('/background.png')]  bg-cover h-[105vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e4] to-[#00000017] to-80%"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000d3] to-[#00000017] to-80%"></div>

        <div className="z-10 relative flex flex-col items-start gap-18 max-lg:gap-16">
          <Navbar />

          <HeroSection />
        </div>
      </header>
  );
}

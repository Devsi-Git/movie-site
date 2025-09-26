import { GoHeart, GoHome, GoSignIn } from "react-icons/go";

export default function Aside() {
  return (
    <aside className="z-20 fixed flex flex-col justify-center gap-8.5 p-4 w-fit min-h-dvh">
      <button className="text-[22px] hover:scale-115 transition-all cursor-pointer">
        <GoHome />
      </button>

      <button className="text-[22px] hover:scale-115 transition-all cursor-pointer">
        <GoHeart />
      </button>

      <button className="text-[22px] hover:scale-115 transition-all cursor-pointer">
        <GoSignIn />
      </button>
    </aside>
  );
}

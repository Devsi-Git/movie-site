import { GoHeart, GoHome, GoSignIn } from "react-icons/go";

export default function Aside() {
  return (
    <aside className="z-10 fixed flex flex-col justify-center gap-8.5 p-4 w-fit min-h-dvh">
      <button>
        <GoHome className="text-[22px] hover:scale-115 transition-all cursor-pointer" />
      </button>
      <button>
        <GoHeart className="text-[22px] hover:scale-115 transition-all cursor-pointer" />
      </button>
      <button>
        <GoSignIn className="text-[22px] hover:scale-115 transition-all cursor-pointer" />
      </button>
    </aside>
  );
}

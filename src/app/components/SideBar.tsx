"use client";
import { useRouter } from "next/navigation";
import { GoHeart, GoHome, GoSignIn } from "react-icons/go";

export default function Aside() {
  const router = useRouter();

  return (
    <aside className="z-20 fixed flex flex-col justify-center gap-8.5 p-4 w-fit min-h-dvh">
      <button
        className="text-[22px] hover:scale-115  w-10 h-10 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/")}
      >
        <GoHome />
      </button>

      <button
        className="text-[22px] hover:scale-115 w-10 h-10 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/likes")}
      >
        <GoHeart />
      </button>

      <button
        className="text-[22px] hover:scale-115 w-10 h-10 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/login")}
      >
        <GoSignIn />
      </button>
    </aside>
  );
}

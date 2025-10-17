"use client";
import { useRouter } from "next/navigation";
import { GoHeart, GoHome, GoSignIn } from "react-icons/go";

export default function Aside() {
  const router = useRouter();

  return (
    <aside className="z-20 fixed flex flex-col justify-center gap-8.5 p-4 w-fit min-h-dvh">
      <button
        className="text-[22px] max-lg:text-lg  hover:scale-110  w-9 h-9 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/")}
      >
        <GoHome />
      </button>

      <button
        className="text-[22px] max-lg:text-lg  hover:scale-110 w-9 h-9 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <GoHeart />
      </button>

      <button
        className="text-[22px] max-lg:text-lg hover:scale-110 w-9 h-9 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
        onClick={() => router.push("/login")}
      >
        <GoSignIn />
      </button>
    </aside>
  );
}

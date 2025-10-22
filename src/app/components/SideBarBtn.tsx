"use client";
import { useRouter } from "next/navigation";

export default function SideBarBtn({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  const router = useRouter();

  return (
    <button
      className="text-[22px] max-lg:text-lg  hover:scale-110  w-9 h-9 flex justify-center items-center rounded-xl bg-[#0000005d] backdrop-blur-xs transition-all cursor-pointer"
      onClick={() => router.push(route)}
    >
      {children}
    </button>
  );
}

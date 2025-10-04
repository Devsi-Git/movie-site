import LoadingSkeleton from "./components/LoadingSkeleton";

export default function loading() {
  return (
    <div>
      <div className="z-10 flex justify-between mt-3 items-center px-21 h-full w-full">
        <ul className="flex items-center gap-9">
          <LoadingSkeleton style="w-25 h-12 rounded-xl " />
          <LoadingSkeleton style="w-16 h-6 rounded-full" />
          <LoadingSkeleton style="w-16 h-6 rounded-full" />
          <LoadingSkeleton style="w-16 h-6 rounded-full" />
          <LoadingSkeleton style="w-16 h-6 rounded-full" />
          <LoadingSkeleton style="w-16 h-6 rounded-full" />
        </ul>
        <div className="flex items-center gap-6">
          <LoadingSkeleton style="w-20 h-6 rounded-full" />
          <LoadingSkeleton style="w-10 h-10 rounded-full" />
        </div>
      </div>

      <div className="mt-25 ml-35 flex flex-col gap-5">
        <div className="mb-17 w-90 h-8 border-2 bg-[#8282821e] border-[#82828276] ${style} animate-pulse rounded-xl" />

        <LoadingSkeleton style="w-40 h-6 rounded-full" />
        <LoadingSkeleton style="w-80 h-20 rounded-xl" />
        <LoadingSkeleton style="w-50 h-6 rounded-full" />
        <div className=" space-y-2">
          <LoadingSkeleton style="w-100 h-3 rounded-full" />
          <LoadingSkeleton style="w-100 h-3 rounded-full" />
          <LoadingSkeleton style="w-100 h-3 rounded-full" />
          <LoadingSkeleton style="w-100 h-3 rounded-full" />
          <LoadingSkeleton style="w-45 h-3 rounded-full" />
        </div>
        <div className="gap-8 flex ">
          <LoadingSkeleton style="w-31 h-11 rounded-xl" />
          <div className="mb-17 w-31 h-11 border-2 border-[#82828276] ${style} animate-pulse rounded-xl" />
        </div>
      </div>
    </div>
  );
}

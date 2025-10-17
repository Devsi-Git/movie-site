import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function loading() {
  return (
    <div className="flex bg-cover mx-auto flex-col w-[66%] items-center">
      <div className="flex  mb-2  mt-28 items-center justify-between w-full ">
        <div className="flex gap-5 items-center ">
          <LoadingSkeleton style="w-30 h-13 rounded-xl" />
          <LoadingSkeleton style="w-15 h-7 rounded-full" />
        </div>
        <div className="flex pt-4 justify-between gap-3">
          <LoadingSkeleton style="w-15 h-7 rounded-full" />
          <LoadingSkeleton style="w-7 h-7 rounded-full" />
        </div>
      </div>
      <span className="flex bg-[#82828276] w-full mt-2 mb-4 h-px animate-pulse" />
      <div className="flex w-full gap-10">
        <LoadingSkeleton style="w-50 h-70 rounded-xl" />

        <div>
          <LoadingSkeleton style="w-20 h-5 mb-5 rounded-full" />
          <div className="space-y-3.5">
            <LoadingSkeleton style="w-140 h-4 rounded-full" />
            <LoadingSkeleton style="w-140 h-4 rounded-full" />
            <LoadingSkeleton style="w-140 h-4 rounded-full" />
            <LoadingSkeleton style="w-140 h-4 rounded-full" />
            <LoadingSkeleton style="w-50 h-4 rounded-full" />
            <div className="mt-10 space-y-3">
              <LoadingSkeleton style="w-20 h-3 rounded-full" />
              <LoadingSkeleton style="w-20 h-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

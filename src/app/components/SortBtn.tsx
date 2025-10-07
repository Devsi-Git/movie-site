export default function SortBtn({ on }: { on: boolean }) {
  return (
    <button
      className={`px-10 py-2.5 max-lg:py-2 max-lg:px-8 rounded-full text-sm max-lg:text-[13px]  ${
        on ? "bg-[#00ADEF]" : "bg-[#151515]"
      }`}
    >
      Popular
    </button>
  );
}

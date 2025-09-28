export default function SortBtn({ on }: { on: boolean }) {
  return (
    <button
      className={`px-10 py-2.5 rounded-full text-sm  ${
        on ? "bg-[#00ADEF]" : "bg-[#151515]"
      }`}
    >
      Popular
    </button>
  );
}

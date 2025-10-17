export default function Input({
  type,
  name,
  placeholder,
}: {
  placeholder: string;
  name: string;
  type: string;
}) {
  return (
    <input
      className="w-full py-2 focus:outline-0 px-2.5 border-[#6A6A6A] placeholder:text-sm border rounded-lg"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

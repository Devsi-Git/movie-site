import Image from "next/image";
import Form from "./Form";

export default function page() {
  return (
    <main className="h-screen w-screen flex justify-between items-center">
      <Image
        className="h-auto w-[40%] ml-2"
        width={600}
        height={0}
        src="/Group 27.png"
        alt="bg"
      />
      <div className="flex items-center pr-8 w-[59%] flex-col">
        <h1 className="font-bold text-4xl mb-3">WAVEFLIX</h1>

        <p className="  text-[#6A6A6A]">
          Welcome to your beststreaming web site
        </p>

        <Form />
      </div>
    </main>
  );
}

import Image from "next/image";
import Form from "./Form";

export default function page() {
  return (
    <main className="h-screen w-screen flex justify-between  max-sm:justify-center items-center">
      <Image
        className="h-auto w-[40%] max-lg:w-[50%] max-md:w-[90%] max-sm:w-[75%] max-sm:ml-5 max-[600px]:w-[79%] max-[550px]:w-[87%] max-[426px]:hidden ml-2"
        width={600}
        height={0}
        src="/Group 27.png"
        alt="bg"
      />
      <div className="flex items-center w-[59%] max-sm:w-full max-[426px]:w-full  flex-col max-sm:absolute ">
        <h1 className="font-bold text-4xl max-md:text-3xl mb-3">WAVEFLIX</h1>

        <p className=" max-md:text-sm mb-15 max-sm:mb-10 mr-1 text-nowrap text-[#6A6A6A]">
          Welcome to your beststreaming web site
        </p>

        <Form />
      </div>
    </main>
  );
}

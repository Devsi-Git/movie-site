import { getFilmById } from "@/supabase/films";
import Header from "./Header";
import Image from "next/image";
import CommentForm from "./CommentForm";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const film = await getFilmById(Number(id));
  return (
    <div className="flex flex-row-reverse h-screen max-lg:flex-col-reverse max-lg:justify-end max-lg:mt-10 items-center gap-15 justify-center">
      <CommentForm id={id} />
      <div className="flex bg-cover max-md:w-[75%] w-[65%] flex-col items-center">
        <Header film={film} />
        <span className="flex bg-[#6A6A6A] mt-2 mb-4 w-[100%] h-px" />
        <main className="px-2 gap-8 max-[426px]:relative flex">
          <Image
            className="min-w-[220px] max-[426px]:blur-xs max-md:min-w-[200px] max-[426px]:absolute max-[426px]:w-full max-[426px]:-z-10  max-[426px]:grayscale  max-[426px]:left-0  max-sm:min-w-[180px] h-auto max-h-[327px]"
            src={film.pic}
            alt={film.name}
            width={600}
            height={0}
          />
          <div className="flex flex-col max-h-[270px] max-[426px]:w-[270px] max-[376px]:max-w-[250px] justify-between">
            summary :
            <p className="mb-6 max-lg:text-sm max-md:text-xs  max-[605px]:overflow-scroll  font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              porro id magni libero labore vitae nesciunt, distinctio vero
              minus, quisquam voluptatem quia cumque, natus rem. Aliquid
              eligendi iusto repellat optio.Lorem ipsum dolor sit amet
              consectetur. Nunc sit eget pharetra ut at duis non justo turpis.
              Enim interdum etiam feugiat egestas.
            </p>
            <div>
              <div className="text-sm">
                Country:{" "}
                <span className="text-[#B4B4B4] font-semibold"> US</span>
              </div>
              <div className="text-sm">
                Language:
                <span className="text-[#B4B4B4] font-semibold"> EN</span>
              </div>
              <div className="text-sm">
                Popularity:
                <span className="text-[#B4B4B4] font-semibold"> 87%</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

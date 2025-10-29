import { getFilmById } from "@/supabase/films";
import Header from "./Header";
import Image from "next/image";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const film = await getFilmById(Number(id));

  return (
    <div className="flex bg-cover flex-col items-center">
      <Header film={film} />

      <span className="flex bg-[#6A6A6A] mt-2 mb-4 w-[66%] h-px" />

      <main className="w-[66%] gap-8 flex">
        <Image
          className="h-auto min-w-[220px]"
          src={film.pic}
          alt={film.name}
          width={220}
          height={0}
        />
        <div>
          summary :
          <p className="mt-2 mb-6 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            porro id magni libero labore vitae nesciunt, distinctio vero minus,
            quisquam voluptatem quia cumque, natus rem. Aliquid eligendi iusto
            repellat optio.Lorem ipsum dolor sit amet consectetur. Nunc sit eget
            pharetra ut at duis non justo turpis. Enim interdum etiam feugiat
            egestas. Egestas ipsum in egestas tristique eget. Nibh elementum
            ultrices amet vel commodo aenean lectus fringilla morbi. Elit
            laoreet eu malesuada imperdiet nullam venenatis non nec. Mattis
            netus blandit morbi.
          </p>
          <div className="text-sm">
            Country: <span className="text-[#B4B4B4] font-semibold"> US</span>
          </div>
          <div className="text-sm">
            Language:<span className="text-[#B4B4B4] font-semibold"> EN</span>
          </div>
          <div className="text-sm">
            Popularity:
            <span className="text-[#B4B4B4] font-semibold"> 87%</span>
          </div>
        </div>
      </main>
    </div>
  );
}

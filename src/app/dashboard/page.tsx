import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import { getFilms } from "@/supabase/films";
import { getUserLike } from "@/supabase/Likes";
import UserComment from "./UserComment";
import MyLineChart from "./Chart";

export default async function page() {
  const user = await getUser();
  if (!user) {
    redirect("/loginORsignup");
  }
  const films = await getFilms();
  const likes = await getUserLike(user.id);
  const years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024, 2025,
  ];

  const likedFilms = films
    .filter((film) => likes.some((like) => like.movie_id === film.id))
    .map((film) => film.year);
  const likedYears = years.map((year) => {
    const count = likedFilms.filter((film) => film === year);
    return count.length;
  });

  const rateAvg = years.map((year) => {
    const yearFilms = films.filter((film) => film.year === year);
    return yearFilms.length > 0
      ? Number(
          (
            yearFilms.reduce((sum, film) => sum + film.rate, 0) /
            yearFilms.length
          ).toFixed(1)
        )
      : 4;
  });

  return (
    <div
      className=" w-screen h-screen flex max-md:p-0 max-md:mt-10 max-md:justify-around justify-center
     flex-col px-30"
    >
      <header className="flex-col flex max-[426px]:mb-5 max-md:px-20 ">
        <div className="flex px-3 max-[376px]:p-0 items-end justify-between">
          <h1 className="max-sm:text-2xl max-[321px]:right-7 max-[321px]:relative text-3xl">
            {user.user_metadata.userName}
          </h1>
          <div className="max-[426px]:absolute max-[321px]:right-15 max-[426px]:top-20 max-sm:text-sm">
            {user.email}
          </div>
        </div>
        <span className="block bg-[#6A6A6A] max-[321px]:w-[140%] self-center max-[376px]:w-[110%]  max-sm:mt-1 mt-2 mb-4 w-full h-px" />
      </header>

      <main className="flex max-md:flex-col max-lg:gap-7 max-md:mt-5 max-md:items-center justify-around px-5">
        <MyLineChart year={years} likedYears={likedYears} rateAvg={rateAvg} />
        <UserComment id={user.id} />
      </main>
    </div>
  );
}

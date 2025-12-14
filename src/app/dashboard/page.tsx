import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import { getFilms } from "@/supabase/films";
import MyLineChart from "./Chart";
import { getUserLike } from "@/supabase/Likes";
import UserComment from "./UserComment";

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
    <div className=" w-screen h-screen flex justify-center flex-col px-30">
      <header className="flex px-3 items-center justify-between">
        <h1 className=" text-3xl">{user.user_metadata.userName}</h1>
        <div>{user.email}</div>
      </header>
      <span className="flex bg-[#6A6A6A] mt-2 mb-4 w-[100%] h-px" />

      <main className="flex justify-around px-5">
        <MyLineChart year={years} likedYears={likedYears} rateAvg={rateAvg} />
        <UserComment id={user.id} />
      </main>
    </div>
  );
}

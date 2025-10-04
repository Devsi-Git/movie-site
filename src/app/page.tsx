import FilmSection from "./components/FilmSection";
import Header from "./components/Header";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <>
      <Header />
      <main>
        <FilmSection />
      </main>
    </>
  );
}

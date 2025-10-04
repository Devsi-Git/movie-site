import FilmSection from "./components/FilmSection";
import Header from "./components/Header";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FilmSection />
      </main>
    </>
  );
}

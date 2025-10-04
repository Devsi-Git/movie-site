import FilmSection from "./components/FilmSection";
import Header from "./components/Header";
import LoadingSkeleton from "./components/LoadingSkeleton";

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

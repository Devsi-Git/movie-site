import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import FilmSection from "./components/FilmSection";
import Header from "./components/Header";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <Header />
      <main>
        <FilmSection searchParams={searchParams} />
      </main>
    </>
  );
}

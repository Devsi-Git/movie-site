"use client";

import { searchFilms } from "@/supabase/films";
import { createContext, ReactNode, useState } from "react";

interface Film {
  id: number;
  created_at: string;
  name: string;
  year: number;
  rate: number;
  pic: string;
}

interface FilmContextType {
  searchResult: Film[] | null;
  handleSearch: (searchParam: string) => Promise<void>;
}

export const filmContext = createContext<FilmContextType>({
  searchResult: [],
  handleSearch: async () => {},
});

export function FilmProvider({ children }: { children: ReactNode }) {
  const [searchResult, setSearchResult] = useState<Film[] | null>(null);

  const handleSearch = async (searchParam: string) => {
    const res = await searchFilms(searchParam);
    setSearchResult(res);
  };

  return (
    <filmContext.Provider value={{ searchResult, handleSearch }}>
      {children}
    </filmContext.Provider>
  );
}

"use client";

import { useState } from "react";
import MovieCard from "@/components/ui/MovieCard";
import Container from "@/components/ui/Container";
import { MapPin, ChevronRight } from "lucide-react";
import { Movie, MovieStatus } from "@/types/movie";
import Link from "next/link";

interface MovieListProps {
  nowShowingMovies: Movie[];
  comingSoonMovies: Movie[];
  imaxMovies: Movie[];
}

export default function MovieList({
  nowShowingMovies,
  comingSoonMovies,
  imaxMovies,
}: MovieListProps) {
  const [activeTab, setActiveTab] = useState<MovieStatus>("now-showing");

  const tabs = [
    { id: "now-showing" as MovieStatus, label: "Đang chiếu" },
    { id: "coming-soon" as MovieStatus, label: "Sắp chiếu" },
    { id: "imax" as MovieStatus, label: "Phim IMAX" },
  ];

  return (
    <section className="pb-12 pt-6">
     <div className="max-w-7xl mx-auto">
        {/* Header with Tabs and Location */}
        <div className="flex w-full md:justify-start justify-between gap-5 items-center mb-10">
        <div className="flex">
          {/* Title - hidden on mobile */}
          <div className="hidden md:block">
            <span className="border-l-4 border-solid border-[#034ea2] mr-2"></span>
            <h1 className="mr-10 text-xl font-bold not-italic uppercase inline text-black">
              Phim
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap flex-row"
                role="tablist"
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className="-mb-px mr-3 md:mr-8 text-black-10 last:mr-0 flex-auto text-center hover:text-blue-10 transition-all duration-300 ease-in-out cursor-pointer relative"
                  >
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal hover:text-blue-10 transition-all duration-300 ease-in-out cursor-pointer relative text-[#034ea2] ${
                        activeTab === tab.id
                          ? "text-blue-10 opacity-100"
                          : "text-black-10 opacity-50"
                      }`}
                      role="tab"
                      type="button"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        </div>

        {/* Movie Grid */}
        <div>
        <div className={activeTab === "now-showing" ? "" : "hidden"}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
            {nowShowingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {nowShowingMovies.length > 0 && (
            <div className="text-center transition-all duration-300">
              <Link
                href="/phim-dang-chieu/"
                className="text-orange-primary hover:text-white w-40 border border-orange-hover hover:bg-orange-hover transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-orange-hover rounded text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 justify-center"
              >
                Xem thêm
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <div className={activeTab === "coming-soon" ? "" : "hidden"}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
            {comingSoonMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {comingSoonMovies.length > 0 && (
            <div className="text-center transition-all duration-300">
              <Link
                href="/phim-sap-chieu/"
                className="text-orange-primary hover:text-white w-40 border border-orange-hover hover:bg-orange-hover transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-orange-hover rounded text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 justify-center"
              >
                Xem thêm
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        <div className={activeTab === "imax" ? "" : "hidden"}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
            {imaxMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}


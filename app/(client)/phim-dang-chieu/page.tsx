"use client";

import { useEffect } from "react";
import Link from "next/link";
import MovieCard from "@/components/ui/MovieCard";
import Container from "@/components/ui/Container";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNowShowingMovies, fetchComingSoonMovies, fetchImaxMovies } from "@/store/features/movieSlice";
import { MovieStatus } from "@/store/features/movieTypes";

export default function NowShowingMoviesPage() {
  const dispatch = useAppDispatch();
  const { nowShowingMovies, loading, error } = useAppSelector(
    (state) => state.movie
  );

  // Fetch movies khi component mount
  useEffect(() => {
    dispatch(fetchNowShowingMovies());
    dispatch(fetchComingSoonMovies());
    dispatch(fetchImaxMovies());
  }, [dispatch]);

  const tabs = [
    { id: "NowShowing" as MovieStatus, label: "Đang chiếu", href: "/phim-dang-chieu" },
    { id: "ComingSoon" as MovieStatus, label: "Sắp chiếu", href: "/phim-sap-chieu" },
    { id: "IMAX" as MovieStatus, label: "Phim IMAX", href: "/phim-imax" },
  ];

  return (
    <section className="pb-12 pt-6">
      <Container>
        {/* Header with Tabs */}
        <div className="mb-10">
          <div className="flex w-full md:justify-start justify-between gap-5 items-center">
            <div className="flex">
              {/* Title */}
              <div className="hidden md:block">
                <span className="border-l-4 border-solid border-[#034ea2] mr-2"></span>
                <h1 className="mr-10 text-xl font-bold not-italic uppercase inline text-[#4A4A4A]">
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
                        className="-mb-px mr-3 md:mr-8 text-black-10 last:mr-0 flex-auto text-center transition-all duration-300 ease-in-out cursor-pointer relative"
                      >
                        <Link
                          href={tab.href}
                          className={`md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal transition-all duration-300 ease-in-out cursor-pointer relative pb-1 ${
                            tab.id === "NowShowing"
                              ? "text-[#034ea2] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.25 after:bg-[#034ea2]"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                          role="tab"
                        >
                          {tab.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">Đang tải danh sách phim...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Có lỗi xảy ra: {error}</p>
          </div>
        )}

        {/* Movie Grid */}
        {!loading && !error && (
          <>
            {nowShowingMovies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                {nowShowingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Hiện chưa có phim đang chiếu</p>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}

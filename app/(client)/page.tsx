"use client";

import { useEffect } from "react";
import CinemaCorner from "@/components/features/CinemaCorner";
import HeroCarousel from "@/components/features/HeroCarousel";
import MovieList from "@/components/features/MovieList/MovieList";
import Container from "@/components/ui/Container";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchNowShowingMovies,
  fetchComingSoonMovies,
  fetchImaxMovies,
} from "@/store/features/movieSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { nowShowingMovies, comingSoonMovies, imaxMovies, loading } =
    useAppSelector((state) => state.movie);

  // Fetch movies khi component mount
  useEffect(() => {
    dispatch(fetchNowShowingMovies());
    dispatch(fetchComingSoonMovies());
    dispatch(fetchImaxMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        <HeroCarousel />
        <MovieList
          nowShowingMovies={nowShowingMovies}
          comingSoonMovies={comingSoonMovies}
          imaxMovies={imaxMovies}
        />
      </Container>
      <div className="line-default"></div>
      <Container>
        <CinemaCorner />
      </Container>
    </>
  );
}

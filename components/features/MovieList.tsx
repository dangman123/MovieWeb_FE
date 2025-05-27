import MovieCard from "../ui/MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
  genre: string;
  duration: number;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Phim đang chiếu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            genre={movie.genre}
            duration={movie.duration}
          />
        ))}
      </div>
    </section>
  );
}

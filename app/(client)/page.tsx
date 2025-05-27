import HeroCarousel from "@/components/features/HeroCarousel";
import MovieList from "@/components/features/MovieList";
import Container from "@/components/ui/Container";

// Dữ liệu giả lập (trong thực tế, lấy từ API)
const mockMovies = [
  {
    id: "1",
    title: "Avengers: Endgame",
    poster: "/images/avengers.jpg",
    genre: "Hành động, Viễn tưởng",
    duration: 181,
  },
  {
    id: "2",
    title: "Nhà Bà Nữ",
    poster: "/images/nha-ba-nu.jpg",
    genre: "Hài, Tâm lý",
    duration: 120,
  },
];

export default function HomePage() {
  return (
    <Container>
      <HeroCarousel />
      <MovieList movies={mockMovies} />
    </Container>
  );
}

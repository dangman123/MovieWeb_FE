import CinemaCorner from "@/components/features/CinemaCorner";
import HeroCarousel from "@/components/features/HeroCarousel";
import MovieList from "@/components/features/MovieList/MovieList";
import Container from "@/components/ui/Container";
import { Movie } from "@/types/movie";

// Dữ liệu giả lập (trong thực tế, lấy từ API)
const mockNowShowingMovies: Movie[] = [
  {
    id: "1",
    title: "Chú Thuật Hồi Chiến: Biến Cố Shibuya x Tử Diệt Hồi Du - The Movie",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/27/jujutsu-kaisen-execution-2025-4_1764214883066.jpg",
    rating: 8.1,
    ageLimit: "T16",
    status: "now-showing",
    buyTicketUrl: "/booking/1",
    trailerUrl: "/trailer/1",
  },
  {
    id: "2",
    title: "Phi Vụ Động Trời 2",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/3/zootopia-500_1762159348935.jpg",
    rating: 9.4,
    ageLimit: "K",
    status: "now-showing",
    buyTicketUrl: "/booking/2",
    trailerUrl: "/trailer/2",
  },
  {
    id: "3",
    title: "Hoàng Tử Quỷ",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/25/hoang-tu-quy-500_1764065943970.jpg",
    rating: 9.5,
    ageLimit: "T18",
    status: "now-showing",
    buyTicketUrl: "/booking/3",
    trailerUrl: "/trailer/3",
  },
  {
    id: "4",
    title: "Năm Đêm Kinh Hoàng 2",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/5/nam-dem-kinh-hoang-500_1762335963489.jpg",
    rating: 8.0,
    ageLimit: "T16",
    status: "now-showing",
    buyTicketUrl: "/booking/4",
    trailerUrl: "/trailer/4",
  },
  {
    id: "5",
    title: "96 Phút Sinh Tử",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/27/96-phut-500_1764228373460.jpg",
    rating: 8.0,
    ageLimit: "T16",
    status: "now-showing",
    buyTicketUrl: "/booking/5",
    trailerUrl: "/trailer/5",
  },
  {
    id: "6",
    title: "Astérix Và Obélix - Nhiệm Vụ Cléopâtre",
    poster:
      "https://cdn.galaxycine.vn/media/2024/5/4/asterix--obelix--mission-cleopatre-1_1714800401620.jpg",
    rating: 7.0,
    ageLimit: "K",
    status: "now-showing",
    buyTicketUrl: "/booking/6",
    trailerUrl: "/trailer/6",
  },
  {
    id: "7",
    title: "Ma Lủng Tường",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/26/ma-lung-tuong-500_1764145341889.jpg",
    rating: 7.8,
    ageLimit: "T18",
    status: "now-showing",
    buyTicketUrl: "/booking/7",
    trailerUrl: "/trailer/7",
  },
  {
    id: "8",
    title: "5 Centimet Trên Giây",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/13/5cm-logo-localize-mkt-material-digital-1200x1800_1763016618188.jpg",
    rating: 8.4,
    ageLimit: "T13",
    status: "now-showing",
    buyTicketUrl: "/booking/8",
    trailerUrl: "/trailer/8",
  },
];

const mockComingSoonMovies: Movie[] = [
  {
    id: "9",
    title: "Thế Hệ Kỳ Tích",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/7/the-he-ki-tich-500_1762499297656.jpg",
    rating: 7.0,
    ageLimit: "K",
    status: "coming-soon",
    buyTicketUrl: "/booking/9",
    trailerUrl: "/trailer/9",
  },
  {
    id: "10",
    title: "Scarlet",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/11/scarlet-500_1762835510228.jpg",
    rating: 7.5,
    ageLimit: "T16",
    status: "coming-soon",
    buyTicketUrl: "/booking/10",
    trailerUrl: "/trailer/10",
  },
  {
    id: "11",
    title: "Kumanthong Nhật Bản: Vong Nhi Cúp Bế",
    poster:
      "https://cdn.galaxycine.vn/media/2025/12/9/kumathong-japan-500_1765252390520.jpg",
    rating: 10.0,
    ageLimit: "T18",
    status: "coming-soon",
    buyTicketUrl: "/booking/11",
    trailerUrl: "/trailer/11",
  },
  {
    id: "12",
    title: "Em Sẽ Khử Anh",
    poster:
      "https://cdn.galaxycine.vn/media/2025/12/4/die-my-love-2_1764835569045.jpg",
    rating: 8.0,
    ageLimit: "T18",
    status: "coming-soon",
    buyTicketUrl: "/booking/12",
    trailerUrl: "/trailer/12",
  },
];

const mockImaxMovies: Movie[] = [
  {
    id: "13",
    title:
      "Jujutsu Kaisen: Shibuya Incident × The Culling Game Advance Screening – The Movie",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/27/jujutsu-kaisen-execution-2025-4_1764214883066.jpg",
    rating: 8.1,
    ageLimit: "T16",
    status: "imax",
    isImax: true,
    buyTicketUrl: "/booking/13",
    trailerUrl: "/trailer/13",
  },
  {
    id: "14",
    title: "Zootopia 2",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/3/zootopia-500_1762159348935.jpg",
    rating: 9.4,
    ageLimit: "K",
    status: "imax",
    isImax: true,
    buyTicketUrl: "/booking/14",
    trailerUrl: "/trailer/14",
  },
  {
    id: "15",
    title: "Avatar: Fire And Ash",
    poster:
      "https://cdn.galaxycine.vn/media/2025/11/20/avatar-fire-and-ash-2_1763629183877.jpg",
    rating: 9.5,
    ageLimit: "T13",
    status: "imax",
    isImax: true,
    buyTicketUrl: "/booking/15",
    trailerUrl: "/trailer/15",
  },
  {
    id: "16",
    title: "Project Hail Mary",
    poster:
      "https://cdn.galaxycine.vn/media/2025/7/30/project-mary-500_1753848924810.jpg",
    rating: 8.5,
    ageLimit: "T13",
    status: "imax",
    isImax: true,
    buyTicketUrl: "/booking/16",
    trailerUrl: "/trailer/16",
  },
];

export default function HomePage() {
  return (
    <Container>
      <HeroCarousel />
      <MovieList
        nowShowingMovies={mockNowShowingMovies}
        comingSoonMovies={mockComingSoonMovies}
        imaxMovies={mockImaxMovies}
      />
      <CinemaCorner />
    </Container>
  );
}

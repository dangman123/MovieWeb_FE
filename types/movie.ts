export interface Movie {
  id: string;
  title: string;
  poster: string;
  genre?: string;
  duration?: number;
  rating: number; // Điểm đánh giá (ví dụ: 8.1, 9.4)
  ageLimit?: string; // Giới hạn tuổi: "T16", "T18", "K", "T13"
  status: "now-showing" | "coming-soon" | "imax"; // Trạng thái phim
  trailerUrl?: string;
  buyTicketUrl?: string;
  linkUrl?: string; // URL khi click vào card
  isImax?: boolean; // Có phải phim IMAX không
}

export type MovieStatus = "now-showing" | "coming-soon" | "imax";


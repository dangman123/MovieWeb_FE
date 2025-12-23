// Movie interface cho app (format sau khi transform)
export interface Movie {
  id: string;
  title: string;
  slug?: string;
  poster: string;
  genre?: string;
  duration?: number;
  rating: number; // Điểm đánh giá (ví dụ: 8.1, 9.4)
  ageLimit?: string; // Giới hạn tuổi: "T16", "T18", "K", "T13"
  status: "NowShowing" | "UpComing"; // Trạng thái phim (PascalCase từ API)
  trailerUrl?: string;
  buyTicketUrl?: string; // URL mua vé: /dat-ve/{slug}
  linkUrl?: string; // URL khi click vào card
  isImax?: boolean; // Có phải phim IMAX không (từ IsIMAX field riêng)
}

export type MovieStatus = "NowShowing" | "ComingSoon" | "IMAX";

// Movie từ API (format từ backend)
export interface MovieApiItem {
  MovieID: number;
  Title: string;
  OriginalTitle: string;
  slug: string;
  Synopsis: string;
  Duration: number;
  ReleaseDate: string;
  EndDate: string | null;
  Rating: string; // "8.5", "7.9"
  PosterURL: string | null;
  TrailerURL: string | null;
  AgeRestriction: string; // "T13", "T16", "T18", "K"
  StudioID: number | null;
  Status: "NowShowing" | "UpComing"; // Chỉ 2 status từ API
  IsActive: boolean;
  IsIMAX: boolean; // Field riêng cho IMAX
}

export interface MovieApiResponse {
  success: boolean;
  data: MovieApiItem[];
  message: string;
  meta: {
    total: number;
    lastUpdated: string;
  };
}

export interface MovieDetailApiResponse {
  success: boolean;
  data: MovieApiItem;
  message: string;
}

export interface MovieFilters {
  status?: "NowShowing" | "UpComing";
  isImax?: boolean;
  genre?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

// Helper function để transform từ API format sang app format
export const transformMovieApiToMovie = (apiMovie: MovieApiItem): Movie => {
  return {
    id: apiMovie.MovieID.toString(),
    title: apiMovie.Title,
    slug: apiMovie.slug,
    poster: apiMovie.PosterURL || "",
    duration: apiMovie.Duration,
    rating: parseFloat(apiMovie.Rating) || 0,
    ageLimit: apiMovie.AgeRestriction,
    status: apiMovie.Status, // "NowShowing" hoặc "ComingSoon"
    trailerUrl: apiMovie.TrailerURL || undefined,
    buyTicketUrl: `/dat-ve/${apiMovie.slug}`, // ✅ URL mua vé từ slug
    linkUrl: `/movie/${apiMovie.slug}`,
    isImax: apiMovie.IsIMAX, // ✅ Từ field IsIMAX riêng
  };
};

import { MovieApiResponse, MovieDetailApiResponse, MovieFilters } from "@/store/features/movieTypes";

const API_BASE_URL = "http://localhost:8080/api/v1";

export const movieService = {
  async getMovies(filters?: MovieFilters): Promise<MovieApiResponse> {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters?.status) {
        // Status đã là PascalCase, dùng trực tiếp
        queryParams.append("status", filters.status);
      }
      if (filters?.genre) {
        queryParams.append("genre", filters.genre);
      }
      if (filters?.search) {
        queryParams.append("search", filters.search);
      }
      if (filters?.limit) {
        queryParams.append("limit", filters.limit.toString());
      }
      if (filters?.offset) {
        queryParams.append("offset", filters.offset.toString());
      }

      const url = `${API_BASE_URL}/movies${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // For Next.js, ensure fresh data
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
      }

      const data: MovieApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  },

  async getMovieById(id: string): Promise<MovieDetailApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/movies/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch movie: ${response.statusText}`);
      }

      const data: MovieDetailApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  },

  async getNowShowingMovies(): Promise<MovieApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/movies/showing`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch now showing movies: ${response.statusText}`);
      }

      const data: MovieApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching now showing movies:", error);
      throw error;
    }
  },

  async getComingSoonMovies(): Promise<MovieApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/movies/coming-soon`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch coming soon movies: ${response.statusText}`);
      }

      const data: MovieApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching coming soon movies:", error);
      throw error;
    }
  },

  async getImaxMovies(): Promise<MovieApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/movies/imax`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch IMAX movies: ${response.statusText}`);
      }

      const data: MovieApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching IMAX movies:", error);
      throw error;
    }
  },
};

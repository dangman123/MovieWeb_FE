import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { movieService } from "@/services/movieService";
import { Movie, MovieFilters, transformMovieApiToMovie } from "./movieTypes";

interface MovieState {
  movies: Movie[];
  nowShowingMovies: Movie[];
  comingSoonMovies: Movie[];
  imaxMovies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
  lastUpdated: string | null;
  filters: MovieFilters | null;
}

const initialState: MovieState = {
  movies: [],
  nowShowingMovies: [],
  comingSoonMovies: [],
  imaxMovies: [],
  selectedMovie: null,
  loading: false,
  error: null,
  lastUpdated: null,
  filters: null,
};

// Async thunk để fetch movies
export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (filters: MovieFilters | undefined, { rejectWithValue }) => {
    try {
      const response = await movieService.getMovies(filters);
      return { data: response, filters };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch movies"
      );
    }
  }
);

// Async thunk để fetch movie by ID
export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await movieService.getMovieById(id);
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch movie"
      );
    }
  }
);

// Async thunk để fetch now showing movies
export const fetchNowShowingMovies = createAsyncThunk(
  "movie/fetchNowShowingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieService.getNowShowingMovies();
      return { data: response, status: "NowShowing" as const };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch now showing movies"
      );
    }
  }
);

// Async thunk để fetch coming soon movies
export const fetchComingSoonMovies = createAsyncThunk(
  "movie/fetchComingSoonMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieService.getComingSoonMovies();
      return { data: response, status: "ComingSoon" as const };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch coming soon movies"
      );
    }
  }
);

// Async thunk để fetch IMAX movies
export const fetchImaxMovies = createAsyncThunk(
  "movie/fetchImaxMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieService.getImaxMovies();
      return { data: response, status: "IMAX" as const };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch IMAX movies"
      );
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
      state.nowShowingMovies = [];
      state.comingSoonMovies = [];
      state.imaxMovies = [];
      state.error = null;
      state.lastUpdated = null;
      state.filters = null;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
    setFilters: (state, action: PayloadAction<MovieFilters>) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch movies
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        // Transform từ API format sang app format
        state.movies = (action.payload.data.data || []).map(transformMovieApiToMovie);
        state.lastUpdated = action.payload.data.meta?.lastUpdated || null;
        state.filters = action.payload.filters || null;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.movies = [];
      })
      // Fetch movie by ID
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        // Transform từ API format sang app format
        state.selectedMovie = transformMovieApiToMovie(action.payload.data);
        state.error = null;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.selectedMovie = null;
      })
      // Fetch now showing movies
      .addCase(fetchNowShowingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNowShowingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.nowShowingMovies = (action.payload.data.data || []).map(transformMovieApiToMovie);
        state.lastUpdated = action.payload.data.meta?.lastUpdated || null;
        state.filters = { status: action.payload.status };
        state.error = null;
      })
      .addCase(fetchNowShowingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.nowShowingMovies = [];
      })
      // Fetch coming soon movies
      .addCase(fetchComingSoonMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComingSoonMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.comingSoonMovies = (action.payload.data.data || []).map(transformMovieApiToMovie);
        state.lastUpdated = action.payload.data.meta?.lastUpdated || null;
        state.filters = { status: action.payload.status };
        state.error = null;
      })
      .addCase(fetchComingSoonMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.comingSoonMovies = [];
      })
      // Fetch IMAX movies
      .addCase(fetchImaxMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImaxMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.imaxMovies = (action.payload.data.data || []).map(transformMovieApiToMovie);
        state.lastUpdated = action.payload.data.meta?.lastUpdated || null;
        state.filters = { status: action.payload.status };
        state.error = null;
      })
      .addCase(fetchImaxMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.imaxMovies = [];
      });
  },
});

export const {
  clearMovies,
  clearSelectedMovie,
  setSelectedMovie,
  setFilters,
  clearFilters,
} = movieSlice.actions;

export default movieSlice.reducer;

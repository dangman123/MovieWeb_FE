import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Banner } from "@/types/banner";
import { bannerService } from "@/services/bannerService";

interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

const initialState: BannerState = {
  banners: [],
  loading: false,
  error: null,
  lastUpdated: null,
};

// Async thunk để fetch banners
export const fetchBanners = createAsyncThunk(
  "banner/fetchBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await bannerService.getBanners();
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch banners"
      );
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    clearBanners: (state) => {
      state.banners = [];
      state.error = null;
      state.lastUpdated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.banners = action.payload.data || [];
        state.lastUpdated = action.payload.meta?.lastUpdated || null;
        state.error = null;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.banners = [];
      });
  },
});

export const { clearBanners } = bannerSlice.actions;
export default bannerSlice.reducer;


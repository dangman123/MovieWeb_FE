import { BannerApiResponse } from "@/types/banner";

const API_BASE_URL = "http://localhost:8080/api/v1";

export const bannerService = {
  async getBanners(): Promise<BannerApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/banners`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // For Next.js, ensure fresh data
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch banners: ${response.statusText}`);
      }

      const data: BannerApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching banners:", error);
      throw error;
    }
  },
};


export interface Banner {
  BannerID: number;
  Title: string;
  Description: string;
  ImageURL: string;
  MobileImageURL: string;
  LinkURL: string;
  BannerType: "movie" | "promotion" | "event";
  MovieID: number | null;
  PromotionID: number | null;
  DisplayOrder: number;
  StartDate: string;
  EndDate: string;
  IsActive: boolean;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface BannerApiResponse {
  success: boolean;
  data: Banner[];
  message: string;
  meta: {
    total: number;
    lastUpdated: string;
  };
}


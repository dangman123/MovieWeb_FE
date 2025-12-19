export interface CinemaArticle {
  id: string;
  title: string;
  image: string;
  likes: number;
  views: number;
  slug: string;
  featured?: boolean; // Bài viết nổi bật
}

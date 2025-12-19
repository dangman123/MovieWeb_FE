export const CINEMA_CORNER_TABS = [
  { id: "reviews", label: "Bình luận phim" },
  { id: "blog", label: "Blog điện ảnh" },
] as const;

export type CinemaCornerTab = (typeof CINEMA_CORNER_TABS)[number]["id"];

export const MOCK_CINEMA_REVIEWS = [
  {
    id: "1",
    title:
      "[Preview] Avatar Fire And Ash: Một Tuyệt Tác Nữa Của James Cameron?",
    image:
      "https://www.galaxycine.vn/media/2025/12/8/preview-avatar-fire-and-ash-mot-tuyet-tac-nua-cua-james-cameron-6_1765204784694.jpg",
    likes: 0,
    views: 135,
    slug: "preview-avatar-fire-and-ash-mot-tuyet-tac-nua-cua-james-cameron",
    featured: true, // Bài nổi bật (hiển thị lớn)
  },
  {
    id: "2",
    title: "[Review] Zootopia 2: Disney Thừa Biết Khán Giả Muốn Gì!",
    image:
      "https://www.galaxycine.vn/media/2025/12/3/zootopia-2-disney-thua-biet-khan-gia-muon-gi-6_1764774408476.jpg",
    likes: 0,
    views: 1754,
    slug: "review-zootopia-2-disney-thua-biet-khan-gia-muon-gi",
    featured: false,
  },
  {
    id: "3",
    title: "[Review] Quán Kỳ Nam: Một Phim Việt Vừa Đẹp Lại Vừa Hay!",
    image:
      "https://www.galaxycine.vn/media/2025/11/30/quan-k-nam-mot-phim-viet-vua-dep-lai-vua-hay-5_1764474870488.jpg",
    likes: 0,
    views: 464,
    slug: "review-quan-ky-nam-mot-phim-viet-vua-dep-lai-vua-hay",
    featured: false,
  },
  {
    id: "4",
    title:
      "[Review] Truy Tìm Long Diên Hương: Võ Thuật - Hài Dẫn Đầu Màn Ảnh Việt",
    image: "https://www.galaxycine.vn/media/2025/11/17/750_1763373893620.jpg",
    likes: 0,
    views: 1862,
    slug: "review-truy-tim-long-dien-huong-vo-thuat-hai-dan-dau-man-anh-viet",
    featured: false,
  },
];

export const MOCK_CINEMA_BLOG = [
  {
    id: "5",
    title: "Top 10 Bộ Phim Hay Nhất Năm 2025",
    image: "https://www.galaxycine.vn/media/2025/12/8/top-10-phim-hay-2025.jpg",
    likes: 0,
    views: 2456,
    slug: "top-10-bo-phim-hay-nhat-nam-2025",
    featured: true,
  },
  {
    id: "6",
    title: "Xu Hướng Phim Sắp Tới: AI và Tương Lai Điện Ảnh",
    image: "https://www.galaxycine.vn/media/2025/12/8/ai-va-dien-anh.jpg",
    likes: 0,
    views: 1567,
    slug: "xu-huong-phim-sap-toi-ai-va-tuong-lai-dien-anh",
    featured: false,
  },
  {
    id: "7",
    title: "Đằng Sau Những Cảnh Quay Hoành Tráng Của Hollywood",
    image:
      "https://www.galaxycine.vn/media/2025/12/8/behind-scenes-hollywood.jpg",
    likes: 0,
    views: 892,
    slug: "dang-sau-nhung-canh-quay-hoanh-trang-cua-hollywood",
    featured: false,
  },
];

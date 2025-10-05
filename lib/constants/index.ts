// Dữ liệu giả cho dropdown menus
export const dropdownData = {
  movies: {
    categories: [
      { title: "Phim Đang Chiếu", href: "/client/movies/now-showing", count: 15 },
      { title: "Phim Sắp Chiếu", href: "/client/movies/coming-soon", count: 8 },
      { title: "Suất Chiếu Đặc Biệt", href: "/client/movies/special", count: 3 },
    ],
    featured: [
      {
        title: "Deadpool & Wolverine",
        image: "/images/movies/deadpool.jpg",
        rating: 8.5,
        genre: "Hành Động, Hài",
      },
      {
        title: "Inside Out 2",
        image: "/images/movies/insideout2.jpg",
        rating: 9.0,
        genre: "Hoạt Hình, Gia Đình",
      },
    ],
  },
  products: {
    categories: [
      { title: "Combo Bắp Nước", href: "/client/products/combo", icon: "🍿" },
      { title: "Đồ Ăn Vặt", href: "/client/products/snacks", icon: "🍫" },
      { title: "Đồ Uống", href: "/client/products/drinks", icon: "🥤" },
      { title: "Merchandise", href: "/client/products/merchandise", icon: "🎁" },
    ],
    popular: [
      { name: "Combo Solo", price: "89.000đ", description: "1 Bắp + 1 Nước" },
      { name: "Combo Couple", price: "149.000đ", description: "2 Bắp + 2 Nước" },
      { name: "Combo Family", price: "199.000đ", description: "3 Bắp + 3 Nước" },
    ],
  },
  cinemaCorner: {
    categories: [
      { title: "Tin Điện Ảnh", href: "/client/cinema-corner/news", icon: "📰" },
      { title: "Review Phim", href: "/client/cinema-corner/reviews", icon: "⭐" },
      { title: "Bình Luận Phim", href: "/client/cinema-corner/comments", icon: "💬" },
      { title: "Blog Điện Ảnh", href: "/client/cinema-corner/blog", icon: "✍️" },
    ],
    trending: [
      { title: "Top 10 Phim Bom Tấn Hè 2024", views: "15.2K", date: "2 ngày trước" },
      { title: "Phân Tích Kết Thúc Avengers: Endgame", views: "12.8K", date: "1 tuần trước" },
    ],
  },
  events: {
    categories: [
      { title: "Sự Kiện Đang Diễn Ra", href: "/client/events/ongoing", badge: "HOT" },
      { title: "Sự Kiện Sắp Tới", href: "/client/events/upcoming", badge: "NEW" },
      { title: "Khuyến Mãi", href: "/client/events/promotions", badge: "SALE" },
      { title: "Chương Trình Đặc Biệt", href: "/client/events/special" },
    ],
    featured: [
      {
        title: "Giảm 50% vé xem phim thứ 3",
        date: "Mỗi thứ 3 hàng tuần",
        color: "orange",
      },
      {
        title: "Tích điểm đổi quà tặng",
        date: "01/10 - 31/12/2024",
        color: "blue",
      },
    ],
  },
  cinemas: {
    regions: [
      { name: "Hà Nội", count: 12, href: "/client/cinemas/hanoi" },
      { name: "TP. Hồ Chí Minh", count: 18, href: "/client/cinemas/hcm" },
      { name: "Đà Nẵng", count: 5, href: "/client/cinemas/danang" },
      { name: "Các Tỉnh Khác", count: 25, href: "/client/cinemas/other" },
    ],
    pricing: [
      { day: "Thứ 2 - Thứ 5", standard: "75.000đ", vip: "95.000đ" },
      { day: "Thứ 6 - Chủ Nhật", standard: "95.000đ", vip: "120.000đ" },
    ],
  },
};

export const MenuHeader = [
  { 
    href: "/client/tickets", 
    label: "Mua Vé", 
    variant: "primary", 
    icon: "star" 
  },
  { 
    href: "/client/movies", 
    label: "Phim", 
    hasDropdown: true,
    dropdownKey: "movies" 
  },
  { 
    href: "/client/products", 
    label: "Sản Phẩm", 
    hasDropdown: true,
    dropdownKey: "products" 
  },
  { 
    href: "/client/cinema-corner", 
    label: "Góc Điện Ảnh", 
    hasDropdown: true,
    dropdownKey: "cinemaCorner" 
  },
  { 
    href: "/client/events", 
    label: "Sự Kiện", 
    hasDropdown: true,
    dropdownKey: "events" 
  },
  { 
    href: "/client/cinemas", 
    label: "Rạp/Giá Vé", 
    hasDropdown: true,
    dropdownKey: "cinemas" 
  },
];

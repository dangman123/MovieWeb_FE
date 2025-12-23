"use client";

import { useEffect, use } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMovieDetails } from "@/store/features/movieSlice";
import Link from "next/link";

export default function BookingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const dispatch = useAppDispatch();
  const selectedMovie = useAppSelector((state) => state.movie.selectedMovie);
  const loading = useAppSelector((state) => state.movie.loading);
  const error = useAppSelector((state) => state.movie.error);

  useEffect(() => {
    if (slug) {
      dispatch(fetchMovieDetails(slug));
    }
  }, [dispatch, slug]);

  // ===== RENDER LOADING =====
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
          <p className="mt-4 text-xl">⏳ Đang tải thông tin phim...</p>
        </div>
      </div>
    );
  }

  // ===== RENDER ERROR =====
  if (error || !selectedMovie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-red-500 mb-4">
            ❌ Lỗi: {error || "Không tìm thấy phim"}
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            ← Quay Lại Trang Chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ===== HEADER SECTION ===== */}
      <div className="bg-gray-800 border-b border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="text-red-500 hover:text-red-400 mb-4 inline-block"
          >
            ← Quay Lại
          </Link>
          <h1 className="text-3xl font-bold">
            🎟️ Đặt Vé - {selectedMovie.title}
          </h1>
        </div>
      </div>

      {/* ===== BOOKING SECTION ===== */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Thông tin phim */}
          <div className="col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg sticky top-20">
              <img
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                className="w-full rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold mb-3">{selectedMovie.title}</h3>

              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>⭐ Đánh giá:</span>
                  <span className="font-bold text-yellow-500">
                    {selectedMovie.rating}/10
                  </span>
                </div>
                {selectedMovie.duration && (
                  <div className="flex justify-between">
                    <span>⏱️ Thời lượng:</span>
                    <span className="font-bold">
                      {selectedMovie.duration} phút
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>📺 Trạng thái:</span>
                  <span className="font-bold">
                    {selectedMovie.status === "NowShowing"
                      ? "Đang Chiếu"
                      : "Sắp Chiếu"}
                  </span>
                </div>
                {selectedMovie.ageLimit && (
                  <div className="flex justify-between">
                    <span>🔞 Độ tuổi:</span>
                    <span className="font-bold bg-red-600/30 px-2 py-1 rounded">
                      {selectedMovie.ageLimit}
                    </span>
                  </div>
                )}
                {selectedMovie.isImax && (
                  <div className="flex justify-between">
                    <span>🎬 IMAX:</span>
                    <span className="font-bold text-blue-400">Có</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="col-span-2">
            {/* Step 1: Chọn Rạp */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm mr-3">
                  1
                </span>
                Chọn Rạp Chiếu
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "CGV Aeon Mall",
                  "Lotte Cinema",
                  "Galaxy Cinema",
                  "BHD Star",
                ].map((cinema) => (
                  <button
                    key={cinema}
                    className="p-4 border-2 border-gray-700 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition text-left"
                  >
                    <p className="font-bold">{cinema}</p>
                    <p className="text-sm text-gray-400">
                      2 rạp | 5 suất chiếu
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Chọn Ngày & Suất */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm mr-3">
                  2
                </span>
                Chọn Ngày & Suất Chiếu
              </h3>

              {/* Ngày */}
              <div className="mb-6">
                <p className="text-gray-300 mb-3">📅 Ngày Chiếu</p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[0, 1, 2, 3, 4].map((day) => {
                    const date = new Date();
                    date.setDate(date.getDate() + day);
                    const dayName = [
                      "Chủ Nhật",
                      "Thứ Hai",
                      "Thứ Ba",
                      "Thứ Tư",
                      "Thứ Năm",
                      "Thứ Sáu",
                      "Thứ Bảy",
                    ];
                    return (
                      <button
                        key={day}
                        className="px-4 py-3 border-2 border-gray-700 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition whitespace-nowrap"
                      >
                        <p className="text-sm font-bold">
                          {dayName[date.getDay()]}
                        </p>
                        <p className="text-xs text-gray-400">
                          {date.toLocaleDateString("vi-VN")}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Suất chiếu */}
              <div>
                <p className="text-gray-300 mb-3">⏰ Suất Chiếu</p>
                <div className="grid grid-cols-4 gap-2">
                  {["09:00", "12:30", "15:45", "18:00", "20:30", "23:00"].map(
                    (time) => (
                      <button
                        key={time}
                        className="p-3 border-2 border-gray-700 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition font-bold"
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Chọn Loại Vé */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm mr-3">
                  3
                </span>
                Chọn Loại Vé
              </h3>

              <div className="space-y-3">
                {[
                  { type: "Vé Thường", price: "50.000 đ" },
                  { type: "Vé Sinh Viên", price: "40.000 đ" },
                  { type: "Vé Người Cao Tuổi", price: "40.000 đ" },
                  { type: "Vé VIP", price: "70.000 đ" },
                ].map((ticket) => (
                  <label
                    key={ticket.type}
                    className="flex items-center p-4 border-2 border-gray-700 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition cursor-pointer"
                  >
                    <input type="radio" name="ticket" className="mr-3" />
                    <div className="flex-1">
                      <p className="font-bold">{ticket.type}</p>
                    </div>
                    <p className="font-bold text-red-500">{ticket.price}</p>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 4: Checkout */}
            <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm mr-3">
                  4
                </span>
                Xác Nhận & Thanh Toán
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-300 pb-4 border-b border-gray-700">
                  <span>Tổng cộng:</span>
                  <span className="text-2xl font-bold text-red-500">0 đ</span>
                </div>

                <div className="space-y-2">
                  <button className="w-full px-6 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition transform hover:scale-105">
                    💳 Thanh Toán Ngay
                  </button>
                  <button className="w-full px-6 py-4 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition">
                    🛒 Thêm vào Giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

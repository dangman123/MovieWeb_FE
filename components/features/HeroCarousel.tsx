"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchBanners } from "@/store/features/bannerSlice";
import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
  const dispatch = useAppDispatch();
  const { banners, loading, error } = useAppSelector((state) => state.banner);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Chỉ fetch nếu chưa có banners
    if (banners.length === 0) {
      dispatch(fetchBanners());
    }
  }, [dispatch, banners.length]);

  useEffect(() => {
    // Detect mobile on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  // Lọc chỉ lấy banners đang active
  // Tạm thời chỉ lọc theo IsActive, có thể thêm lọc thời gian sau
  const activeBanners = banners.filter((banner) => {
    if (!banner.IsActive) return false;
    
    // Optional: Lọc theo thời gian hiệu lực (uncomment để bật)
    // const now = new Date();
    // const startDate = new Date(banner.StartDate);
    // const endDate = new Date(banner.EndDate);
    // return now >= startDate && now <= endDate;
    
    return true;
  });

  // Debug: Log để kiểm tra
  useEffect(() => {
    if (banners.length > 0) {
      const active = banners.filter((b) => b.IsActive);
      console.log("Total banners:", banners.length);
      console.log("Active banners:", active.length);
      if (active.length > 0 && active[currentIndex]) {
        console.log("Current banner:", active[currentIndex]);
        console.log("Image URL:", active[currentIndex].ImageURL);
      }
    }
  }, [banners, currentIndex]);

  if (loading) {
    return (
      <section className="relative h-64 sm:h-80 md:h-96 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xl text-gray-600">Đang tải...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative h-64 sm:h-80 md:h-96 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xl text-red-600">Lỗi: {error}</div>
        </div>
      </section>
    );
  }

  if (activeBanners.length === 0) {
    return (
      <section className="relative h-64 sm:h-80 md:h-96 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
            Quảng bá phim nổi bật
          </h1>
        </div>
      </section>
    );
  }

  const currentBanner = activeBanners[currentIndex];

  return (
    <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-900 mt-[50px]">
      <Link href={currentBanner.LinkURL} className="block h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src={isMobile ? currentBanner.MobileImageURL : currentBanner.ImageURL}
            alt={currentBanner.Title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                {currentBanner.Title}
              </h2>
              {currentBanner.Description && (
                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl line-clamp-2">
                  {currentBanner.Description}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Navigation Arrows */}
      {activeBanners.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {activeBanners.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

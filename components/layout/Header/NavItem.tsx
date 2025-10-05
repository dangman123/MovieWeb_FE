"use client";

import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { dropdownData } from "@/lib/constants";
import { useState } from "react";

// Type definitions for dropdown data
type MovieCategory = { title: string; href: string; count: number };
type FeaturedMovie = { title: string; image: string; rating: number; genre: string };
type ProductCategory = { title: string; href: string; icon: string };
type PopularCombo = { name: string; price: string; description: string };
type CinemaCornerCategory = { title: string; href: string; icon: string };
type TrendingItem = { title: string; views: string; date: string };
type EventCategory = { title: string; href: string; badge?: string };
type FeaturedEvent = { title: string; date: string; color: string };
type Region = { name: string; count: number; href: string };
type Pricing = { day: string; standard: string; vip: string };

interface NavItemProps {
  href: string;
  label: string;
  variant?: "primary" | "default";
  hasDropdown?: boolean;
  icon?: string;
  onClick?: () => void;
  dropdownKey?: keyof typeof dropdownData;
}

export default function NavItem({
  href,
  label,
  variant = "default",
  hasDropdown = false,
  icon,
  onClick,
  dropdownKey,
}: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "primary") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-md font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
      >
        <Star className="w-4 h-4 fill-white" />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        onClick={onClick}
        className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center space-x-1 group"
      >
        <span>{label}</span>
        {hasDropdown && (
          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
        )}
      </Link>

      {/* Dropdown Menu khi hover */}
      {hasDropdown && isHovered && dropdownKey && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px] animate-in fade-in slide-in-from-top-2 duration-200">
            {renderDropdownContent(dropdownKey)}
          </div>
        </div>
      )}
    </div>
  );
}

// Render nội dung dropdown dựa vào loại menu
function renderDropdownContent(key: keyof typeof dropdownData) {
  const data = dropdownData[key];

  switch (key) {
    case "movies": {
      const movieData = data as { categories: MovieCategory[]; featured: FeaturedMovie[] };
      return (
        <div className="p-4 space-y-3">
          {movieData.categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex justify-between items-center p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                {cat.title}
              </span>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                {cat.count}
              </span>
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2 px-3">Phim Nổi Bật</p>
            {movieData.featured.map((movie, idx) => (
              <div
                key={idx}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-semibold text-gray-800 text-sm">
                  {movie.title}
                </p>
                <p className="text-xs text-gray-500">{movie.genre}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-medium text-gray-700">
                    {movie.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "products": {
      const productData = data as { categories: ProductCategory[]; popular: PopularCombo[] };
      return (
        <div className="p-4 space-y-2">
          {productData.categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                {cat.title}
              </span>
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2 px-3">Combo Phổ Biến</p>
            {productData.popular.map((combo, idx) => (
              <div
                key={idx}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {combo.name}
                    </p>
                    <p className="text-xs text-gray-500">{combo.description}</p>
                  </div>
                  <span className="text-sm font-bold text-orange-600">
                    {combo.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "cinemaCorner": {
      const cinemaCornerData = data as { categories: CinemaCornerCategory[]; trending: TrendingItem[] };
      return (
        <div className="p-4 space-y-2">
          {cinemaCornerData.categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                {cat.title}
              </span>
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2 px-3">Xu Hướng</p>
            {cinemaCornerData.trending.map((item, idx) => (
              <div
                key={idx}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-semibold text-gray-800 text-sm line-clamp-2">
                  {item.title}
                </p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <span className="text-xs text-orange-600 font-medium">
                    {item.views} lượt xem
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "events": {
      const eventData = data as { categories: EventCategory[]; featured: FeaturedEvent[] };
      return (
        <div className="p-4 space-y-2">
          {eventData.categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex justify-between items-center p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                {cat.title}
              </span>
              {cat.badge && (
                <span
                  className={`text-xs px-2 py-1 rounded-full font-bold ${
                    cat.badge === "HOT"
                      ? "bg-red-100 text-red-600"
                      : cat.badge === "NEW"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {cat.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2 px-3">Nổi Bật</p>
            {eventData.featured.map((event, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg ${
                  event.color === "orange"
                    ? "bg-orange-50 border border-orange-100"
                    : "bg-blue-50 border border-blue-100"
                }`}
              >
                <p className="font-semibold text-gray-800 text-sm">
                  {event.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "cinemas": {
      const cinemaData = data as { regions: Region[]; pricing: Pricing[] };
      return (
        <div className="p-4 space-y-2">
          <p className="text-xs text-gray-500 mb-2 px-3">Khu Vực</p>
          {cinemaData.regions.map((region, idx) => (
            <Link
              key={idx}
              href={region.href}
              className="flex justify-between items-center p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                {region.name}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {region.count} rạp
              </span>
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2 px-3">Bảng Giá</p>
            {cinemaData.pricing.map((price, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-50 rounded-lg mb-2"
              >
                <p className="font-semibold text-gray-800 text-sm mb-2">
                  {price.day}
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">
                    Ghế Thường: <strong>{price.standard}</strong>
                  </span>
                  <span className="text-gray-600">
                    Ghế VIP: <strong>{price.vip}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}


"use client";

import { Star } from "lucide-react";
import Link from "next/link";

export default function UserMenu() {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      {/* Đăng Nhập */}
      <Link
        href="/auth/login"
        className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
      >
        Đăng Nhập
      </Link>

      {/* THAM GIA G STAR Badge */}
      <Link
        href="/client/membership"
        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold">THAM GIA</span>
          <span className="text-xs font-bold">G STAR</span>
        </div>
      </Link>
    </div>
  );
}


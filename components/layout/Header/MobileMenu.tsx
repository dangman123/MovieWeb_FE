"use client";

import { Menu, X, Search, Star } from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Search Bar Mobile */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm phim, rạp..."
                  className="w-full px-4 py-3 pl-11 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="mb-6">
              <Navigation isMobile onItemClick={() => setIsOpen(false)} />
            </div>

            {/* Auth & Membership */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Đăng Nhập
              </Link>
              <Link
                href="/client/membership"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
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
          </div>
        </div>
      )}
    </div>
  );
}


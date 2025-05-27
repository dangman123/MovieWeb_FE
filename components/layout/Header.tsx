"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/client">
          <div className="text-xl sm:text-2xl font-bold">Galaxy Cine</div>
        </Link>
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <nav
          className={`sm:flex sm:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0`}
        >
          <Link
            href="/client/movies"
            className="block sm:inline-block py-2 sm:py-0 hover:text-gray-300"
          >
            Phim
          </Link>
          <Link
            href="/client/cinemas"
            className="block sm:inline-block py-2 sm:py-0 hover:text-gray-300"
          >
            Rạp
          </Link>
          <Link
            href="/client/promotions"
            className="block sm:inline-block py-2 sm:py-0 hover:text-gray-300"
          >
            Khuyến mãi
          </Link>
          <Link
            href="/client/profile"
            className="block sm:inline-block py-2 sm:py-0 hover:text-gray-300"
          >
            Tài khoản
          </Link>
        </nav>
      </div>
    </header>
  );
}

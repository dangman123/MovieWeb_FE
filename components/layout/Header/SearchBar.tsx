"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-orange-500 transition-colors">
      <Search className="w-5 h-5" />
    </button>
  );
}


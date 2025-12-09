"use client";

import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <Container className="px-0">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right Section: Search & User Menu */}
          <div className="flex items-center space-x-2">
            <SearchBar />
            <UserMenu />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

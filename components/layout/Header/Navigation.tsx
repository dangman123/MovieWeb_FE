"use client";

import { MenuHeader } from "@/lib/constants";
import NavItem from "./NavItem";

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({
  isMobile = false,
  onItemClick,
}: NavigationProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        {MenuHeader.map((item: any) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            variant={item.variant as "primary" | "default"}
            hasDropdown={item.hasDropdown}
            icon={item.icon}
            dropdownKey={item.dropdownKey}
            onClick={onItemClick}
          />
        ))}
      </div>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      {MenuHeader.map((item: any) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          variant={item.variant as "primary" | "default"}
          hasDropdown={item.hasDropdown}
          icon={item.icon}
          dropdownKey={item.dropdownKey}
        />
      ))}
    </nav>
  );
}


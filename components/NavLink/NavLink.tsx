"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode; 
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`no-underline font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition-all duration-200 ${
        path?.startsWith(href)
          ? "bg-linear-to-r from-[#fd4715] to-[#f9b241] text-white"
          : "text-[#ddd6cb] hover:bg-clip-text hover:bg-linear-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
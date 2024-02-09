"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  icon: React.ReactNode;
  url: string;
  callback?: () => void;
};

const SidebarButtonComponent = ({ name, icon, url, callback }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex border border-[#31B529] px-8 py-4 rounded-lg shadow-lg space-x-2 cursor-pointer hover:opacity-90 transition-all hover:shadow-xl
        ${
          pathname.includes(name.toLowerCase()) ||
          (pathname === "/" && name === "Home")
            ? "text-white bg-[#31B529]"
            : "bg-white text-[#31B529]"
        }
      `}
      href={url}
      onClick={callback}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};

export default SidebarButtonComponent;

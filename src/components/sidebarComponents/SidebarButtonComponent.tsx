import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  name: string;
  icon: React.ReactNode;
  url: string
};

const SidebarButtonComponent = ({ name, icon, url }: Props) => {

  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <Link
      className="flex bg-[#31B529] border px-8 py-4 rounded-lg shadow-lg space-x-2 cursor-pointer"
      href={url}
    >
      {icon}
      <p className="text-white">{name}</p>
    </Link>
  );
};

export default SidebarButtonComponent;

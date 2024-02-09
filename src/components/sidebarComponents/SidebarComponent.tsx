"use client";
import React from "react";
import ProfileComponent from "./ProfileComponent";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import TokenIcon from "@mui/icons-material/Token";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarButtonComponent from "./SidebarButtonComponent";
import { usePathname } from "next/navigation";

type Props = {};

const DEFAULT_NAME = "John Doe";

const buttons = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    name: "Events",
    icon: <CalendarMonthIcon />,
    url: "/events",
  },
  {
    name: "History",
    icon: <HistoryIcon />,
    url: "/history",
  },
  {
    name: "Badges",
    icon: <TokenIcon />,
    url: "/badges",
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    url: "/settings",
  },
];

const SidebarComponent = (props: Props) => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className="flex flex-col max-w-[300px] h-full border-2 border-[#A5EEA0] bg-white">
      <ProfileComponent name={DEFAULT_NAME} />
      <div className="flex flex-col space-y-4 m-8 p-4">
        {buttons.map((button, index) => {
          return (
            <SidebarButtonComponent
              key={index}
              name={button.name}
              icon={button.icon}
              url={button.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;

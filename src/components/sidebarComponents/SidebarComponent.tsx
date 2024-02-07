import React from "react";
import ProfileComponent from "./ProfileComponent";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import TokenIcon from '@mui/icons-material/Token';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarButtonComponent from "./SidebarButtonComponent";

type Props = {};

const DEFAULT_NAME = "John Doe";

const buttons = [
  {
    name: "Home",
    icon: <HomeIcon className="text-white"/>,
    url: "/"
  },
  {
    name: "Events",
    icon: <CalendarMonthIcon className="text-white"/>,
    url: "/events"
  },
  {
    name: "History",
    icon: <HistoryIcon className="text-white"/>,
    url: "/history"
  },
  {
    name: "Badges",
    icon: <TokenIcon className="text-white"/>,
    url: "/badges"
  },
  {
    name: "Settings",
    icon: <SettingsIcon className="text-white"/>,
    url: "/settings"
  },
];

const SidebarComponent = (props: Props) => {
  return (
    <div className="flex flex-col max-w-[300px] h-screen border-2 border-[#A5EEA0] bg-white">
      <ProfileComponent name={DEFAULT_NAME} />
      <div className="flex flex-col space-y-4 m-8 p-4">
        {
          buttons.map((button, index) => {
            return (
              <SidebarButtonComponent key={index} name={button.name} icon={button.icon} url={button.url} />
            );
          })
        }
      </div>
      
    </div>
  );
};

export default SidebarComponent;

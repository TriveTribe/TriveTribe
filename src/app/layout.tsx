import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarComponent from "@/components/sidebarComponents/SidebarComponent";
import LogoComponent from "@/components/generalComponents/LogoComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TriveTribe",
  description: "This is a website for volunteering events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <LogoComponent />
        <div className="flex text-black">
          <SidebarComponent />
          {children}
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Montserrat } from "next/font/google";
import React from "react";

import { cn } from "../lib/utils";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Quản lý du học",
  description: "Thiết kế và phát triển bởi nhóm của cô Trân dạy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("h-full", font.className)}>
        {children}
      </body>
    </html>
  );
}

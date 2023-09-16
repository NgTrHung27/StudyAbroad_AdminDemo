import "./globals.css";
import { Montserrat } from "next/font/google";
import React from "react";

import ClientOnly from "../components/client-only";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Quản lý du học",
  description: "Thiết kế và phát triển bởi nhóm của cô Trân dạy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}

import ToastProvider from "@/components/providers/toaster-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ThemeProvider } from "@/components/theme-provider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang điều khiển",
  description: "Tổng quan và điều khiển",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ConfettiProvider />
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

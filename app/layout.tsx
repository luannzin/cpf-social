import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CPF Social",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="shortcut icon"
          href="https://wiki.gelzin.com/api/emoji/%F0%9F%92%B3"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${roboto.className} w-screen h-screen overflow-x-hidden bg-white flex items-center justify-center`}
      >
        <div className="max-w-[1200px] w-full flex items-center justify-center">
          {children}
        </div>
        {/* <Toaster closeButton /> */}
        <Analytics />
      </body>
    </html>
  );
}

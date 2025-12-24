import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";

const lexend = Lexend({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-lexend" 
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-roboto-mono" 
});

export const metadata: Metadata = {
  title: {
    template: "%s | Code & Learn",
    default: "Code & Learn",
  },
  icons: {
    icon: "/images/logo/logo.png?v=2",
    shortcut: "/images/logo/logo.png?v=2",
    apple: "/images/logo/logo.png?v=2",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body
        className={cn(
          "min-h-screen antialiased font-lexend bg-background",
          lexend.variable,
          robotoMono.variable,
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}

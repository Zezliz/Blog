"use client";

import React, { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function App({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-dvh flex-col space-y-6">
      <SiteHeader />
      <main className="container flex-1 overflow-hidden">
        <div
          key={pathname}
          className="animate-[fadeInUp_0.35s_ease-out] will-change-transform"
        >
          {children}
        </div>
      </main>
      <footer className=" container border-t border-t-secondary/60 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 Created by{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.social.github}
            className="text-primary"
          >
            {siteConfig.author}
          </Link>{" "}
        </p>
      </footer>
    </div>
  );
}

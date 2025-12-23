"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { Icons } from "./icons";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoSrcIndex, setLogoSrcIndex] = useState(0);
  
  // Thử các định dạng ảnh khác nhau
  const logoSources = [
    "/images/logo/logo.png",
    "/images/logo/logo.jpg",
    "/images/logo/logo.webp",
    "/images/logo/logo.svg",
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-primary">
            {!logoError && logoSrcIndex < logoSources.length ? (
              <Image
                src={logoSources[logoSrcIndex]}
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-contain"
                priority
                onError={() => {
                  if (logoSrcIndex < logoSources.length - 1) {
                    setLogoSrcIndex(logoSrcIndex + 1);
                  } else {
                    setLogoError(true);
                  }
                }}
              />
            ) : (
            <Icons.logo className="size-12" />
            )}
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Thực đơn</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}

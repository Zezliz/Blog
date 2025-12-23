"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Calendar, X } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  fallbackSrcs?: string[];
}

export default function CertificateCard({
  title,
  issuer,
  date,
  imageSrc,
  imageAlt,
  fallbackSrcs,
}: CertificateCardProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allSources = fallbackSrcs ? [imageSrc, ...fallbackSrcs] : [imageSrc];
  const currentImageSrc =
    !imageError && currentSrcIndex < allSources.length
      ? allSources[currentSrcIndex]
      : null;

  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-secondary/30 transition-all hover:border-primary hover:shadow-lg"
        onClick={() => currentImageSrc && setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          {!imageError && currentSrcIndex < allSources.length ? (
            <Image
              src={currentImageSrc as string}
              alt={imageAlt}
              fill
              className="object-contain transition-transform group-hover:scale-105"
              onError={() => {
                if (currentSrcIndex < allSources.length - 1) {
                  setCurrentSrcIndex((prev) => prev + 1);
                } else {
                  setImageError(true);
                }
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-4">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{issuer}</p>
                <p className="mt-2 text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{issuer}</p>
          <p className="mt-2 flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </p>
        </div>
      </div>

      {isModalOpen && currentImageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -right-12 top-0 rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background"
              aria-label="Đóng"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={currentImageSrc}
              alt={imageAlt}
              width={1200}
              height={900}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            <div className="mt-4 rounded-lg bg-card/90 p-4 text-center backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
              <p className="mt-2 flex items-center justify-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

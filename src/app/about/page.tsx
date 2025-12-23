"use client";
import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Code,
  Network,
  Database,
  Server,
  GitBranch,
  BookOpen,
  GraduationCap,
  Calendar,
} from "lucide-react";
import CertificateCard from "@/components/certificate-card";

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader
        title="Giới Thiệu"
        description="Hãy cùng làm quen với nhau nhé"
      />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0">
        {/* Card Profile */}
        <div className="w-full lg:w-[380px] lg:flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-lg">
            {/* Header với gradient */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-6 pt-16 pb-4">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-background shadow-lg">
                    <Image
                      src={siteConfig.authorImage}
                      width={100}
                      height={100}
                      alt={siteConfig.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {siteConfig.author}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  Kỹ sư mạng tương lai
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Đại học Công nghệ Tp. Hồ Chí Minh
                </p>
              </div>
            </div>

            {/* Thông tin cá nhân */}
            <div className="px-6 py-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    MSSV
                  </span>
                  <span className="text-sm font-semibold">2280600610</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    Lớp
                  </span>
                  <span className="text-sm font-semibold">22DTHE4</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    Ngày sinh
                  </span>
                  <span className="text-sm font-semibold">04/10/2004</span>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    Email
                  </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenthaidat102004@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline break-all transition-colors"
                  >
                    nguyenthaidat102004@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-border bg-secondary/30 px-6 py-4">
              <div className="flex items-center justify-center space-x-3">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.path}
                    rel="noreferrer"
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-12 w-12 rounded-full bg-background shadow-sm transition-all hover:scale-110",
                      social.label === "Github"
                        ? "text-white hover:bg-gray-800 hover:text-white"
                        : social.label === "Facebook"
                          ? "text-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                          : "text-primary hover:bg-primary hover:text-primary-foreground"
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="h-7 w-7 fill-current" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phần giới thiệu */}
        <div className="flex-1 space-y-6">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Về Tôi</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Mình là một{" "}
                <span className="font-semibold text-primary">
                  Kỹ sư mạng tương lai
                </span>
                , hiện đang theo đuổi đam mê công nghệ tại{" "}
                <span className="font-semibold text-foreground">
                  Đại học Công nghệ Tp. Hồ Chí Minh (HUTECH)
                </span>
                .
              </p>
              <p>
                Blog này là cuốn{" "}
                <span className="font-semibold text-primary">nhật ký số</span>{" "}
                lưu giữ những kiến thức mình tích lũy được trong quá trình học
                tập và nghiên cứu. Đây là nơi mình chia sẻ những bài học, kinh
                nghiệm thực tế và những khám phá mới trong lĩnh vực công nghệ
                thông tin, đặc biệt là về mạng máy tính và lập trình.
              </p>
              <p className="text-sm italic text-muted-foreground">
                "Học tập là một hành trình không có điểm dừng. Mỗi ngày là một
                cơ hội để khám phá và phát triển."
              </p>
            </div>
          </div>

          {/* Kỹ năng cơ bản */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Kỹ Năng</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-primary hover:bg-secondary/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Lập Trình</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    JavaScript, HTML, CSS, React, Node.js
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-primary hover:bg-secondary/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Cơ Sở Dữ Liệu
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    SQL, MongoDB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-primary hover:bg-secondary/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Công Cụ</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Git, VS Code
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/30 p-4 transition-all hover:border-primary hover:bg-secondary/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Học Tập</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tự học, Nghiên cứu, Viết blog, Chia sẻ kiến thức
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hành trình */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Hành Trình
            </h2>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Timeline items */}
              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      2022
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Sinh viên ngành Công nghệ thông tin
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bắt đầu hành trình học tập tại Đại học Công nghệ Tp. Hồ Chí
                    Minh (HUTECH)
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      2023
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Bắt đầu học lập trình Web
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tự học JavaScript, HTML, CSS và các framework hiện đại như
                    React, Next.js
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Xây dựng các dự án cá nhân để thực hành và nâng cao kỹ năng
                    lập trình.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      2024
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Tiếp tục phát triển kỹ năng
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nâng cao kiến thức về mạng máy tính, lập trình và các công
                    nghệ mới
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      2025 - Hiện tại
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Chuyên ngành: Công nghệ thông tin - Mạng máy tính
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tập trung vào chuyên ngành Mạng máy tính và Truyền thông dữ
                    liệu
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tạo blog cá nhân để lưu trữ và chia sẻ kiến thức về
                    JavaScript, lập trình web và mạng máy tính.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

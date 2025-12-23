import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Code, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pb-8 md:pb-12 md:pt-10 lg:py-20 overflow-hidden">
      {/* Enhanced Background decoration với animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 flex max-w-6xl flex-col items-center gap-10 text-center">
        {/* Social Links với animation */}
        <div className="flex items-center gap-4 opacity-0 animate-[fadeIn_0.7s_ease-out_0.2s_forwards]">
          {SOCIALS.map((social, index) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                "group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-border/50 bg-card/80 backdrop-blur-md transition-all hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20",
                social.label === "Github"
                  ? "hover:bg-gray-800/80"
                  : social.label === "Facebook"
                    ? "hover:bg-[#1877F2]/20"
                    : "hover:bg-primary/20"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={social.label}
            >
              <social.icon 
                className={cn(
                  "h-7 w-7 fill-current transition-all duration-300",
                  social.label === "Github"
                    ? "text-white group-hover:text-white group-hover:scale-110"
                    : social.label === "Facebook"
                      ? "text-[#1877F2] group-hover:text-[#1877F2] group-hover:scale-110"
                      : "text-primary group-hover:text-primary group-hover:scale-110"
                )} 
              />
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Main Heading với slogan */}
        <div className="space-y-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">
              {siteConfig.name}
            </span>
        </h1>
        </div>

        {/* Slogan */}
        <div className="max-w-3xl space-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl sm:leading-9 font-medium">
            Nơi chia sẻ kiến thức về lập trình, công nghệ mạng và hành trình học tập
          </p>
          <p className="text-base leading-relaxed text-muted-foreground/80 sm:text-lg">
            Blog cá nhân của <span className="font-semibold text-primary">{siteConfig.author}</span> - 
            Sinh viên ngành <span className="font-semibold text-primary">Công nghệ thông tin - Mạng máy tính</span> tại HUTECH. 
            Nơi tôi ghi lại những bài học, kinh nghiệm và kiến thức tích lũy được trong quá trình học tập và nghiên cứu.
        </p>
        </div>

        {/* CTA Buttons với enhanced styling */}
        <div className="flex flex-col items-center gap-4 sm:flex-row opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 px-8 py-6 text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30",
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Xem bài viết
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-100 bg-[length:200%_auto] animate-[shimmer_2s_linear_infinite]"></div>
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "px-8 py-6 text-lg font-semibold border-2 border-primary/30 bg-background/50 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-lg",
            )}
          >
            Tìm hiểu thêm
          </Link>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 opacity-0 animate-[fadeInUp_1s_ease-out_1.1s_forwards]">
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <div className="text-3xl font-bold text-primary">9+</div>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Bài viết</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <div className="text-3xl font-bold text-primary">JavaScript</div>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Chủ đề chính</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <div className="text-3xl font-bold text-primary">HUTECH</div>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Nơi học tập</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

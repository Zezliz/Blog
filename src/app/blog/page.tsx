import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bài viết",
};

export default function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container max-w-7xl py-6 lg:py-10">
      <PageHeader
        title="Bài viết"
        description="Những bài viết về lập trình, công nghệ và cuộc sống"
      />
      <hr className="my-8" />

      {blogs.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={804}
                  height={452}
                  className="border bg-muted transition-colors"
                />
              )}

              <h2 className="text-2xl font-extrabold text-primary">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )}

              {blog.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </p>
              )}

              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">Xem bài viết</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>Không tìm thấy bài viết nào</p>
      )}
    </div>
  );
}

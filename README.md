# Blog MDX Cá Nhân

Blog cá nhân được xây dựng với Next.js 14 và Velite. Sử dụng MDX để viết bài blog với khả năng nhúng React components.

<img src="screenshot/mdx-blog-template.jpg" alt="Blog Preview" width="100%">

## Mục Lục

- [Tính Năng](#tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Hướng Dẫn Cài Đặt](#hướng-dẫn-cài-đặt)
- [Chạy Dự Án](#chạy-dự-án)
- [Thêm Bài Viết Mới](#thêm-bài-viết-mới)

## Tính Năng

- ✅ Hỗ trợ MDX Components
- ✅ Thiết kế responsive sử dụng `shadcn/ui` và `tailwindcss`
- ✅ Syntax highlighting cho code blocks
- ✅ Type-safe với TypeScript
- ✅ Dark mode

## Công Nghệ Sử Dụng

- **Next.js 14**: Framework React với khả năng static site generation (SSG)
- **shadcn/ui**: Component library đẹp mắt và có thể tùy chỉnh
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Markdown với khả năng nhúng JSX components
- **Velite**: Công cụ chuyển đổi Markdown/MDX thành type-safe data layer

## Hướng Dẫn Cài Đặt

### Yêu Cầu Hệ Thống

- Node.js >= 18.x
- pnpm (hoặc npm/yarn)

### Cài Đặt Dependencies

Dự án này sử dụng `pnpm` làm package manager. Nếu chưa có pnpm, cài đặt bằng lệnh:

```bash
npm install -g pnpm
```

Sau đó cài đặt các dependencies:

```bash
pnpm install
```

Hoặc nếu bạn muốn dùng npm:

```bash
npm install
```

## Chạy Dự Án

### 1. Chạy Development Server

Để chạy dự án ở chế độ development:

```bash
pnpm dev
```

hoặc

```bash
npm run dev
```

Sau đó mở trình duyệt và truy cập: **http://localhost:3000**

### 2. Build Production

Để build dự án cho production:

```bash
pnpm build
```

hoặc

```bash
npm run build
```

### 3. Chạy Production Build

Sau khi build, bạn có thể chạy production server:

```bash
pnpm start
```

hoặc

```bash
npm start
```

### 4. Các Lệnh Khác

- **Lint code**: `pnpm lint` hoặc `npm run lint`
- **Format code**: `pnpm prettier` hoặc `npm run prettier`

## Thêm Bài Viết Mới

Để thêm bài viết mới:

1. Tạo file `.mdx` mới trong thư mục `src/content/blog/`
2. **Quan trọng**: Tên file phải sử dụng dấu gạch ngang (`-`) và không có khoảng trắng
   - ✅ Đúng: `bai-viet-cua-toi.mdx`
   - ❌ Sai: `bai viet cua toi.mdx` hoặc `bai_viet_cua_toi.mdx`

3. Format của file MDX:

```mdx
---
title: Tiêu đề bài viết
description: Mô tả ngắn về bài viết
date: 2024-01-01
published: true
image: /images/blog/ten-hinh-anh.webp
author: Tên tác giả
---

Nội dung bài viết của bạn ở đây...

Bạn có thể sử dụng **markdown** và cả React components!
```

4. Sau khi thêm file, development server sẽ tự động reload và bạn sẽ thấy bài viết mới trong trang Blog.

## Cấu Hình

### Cập Nhật Thông Tin Cá Nhân

Chỉnh sửa file `src/config/site.ts` để cập nhật:
- Tên blog
- Mô tả
- Tên tác giả
- Link mạng xã hội
- Avatar

### Thay Đổi Theme

Theme hiện tại là dark mode. Bạn có thể tùy chỉnh trong file `src/app/layout.tsx` và `src/styles/globals.css`.

---

Chúc bạn viết blog vui vẻ! 🎉

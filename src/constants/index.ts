import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Award, BookOpen, UserCircle2, Home } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Home },
  { label: "Bài viết", path: "/blog", icon: BookOpen },
  { label: "Giới Thiệu", path: "/about", icon: UserCircle2 },
  { label: "Chứng Chỉ", path: "/certificates", icon: Award },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
];

import authorAvatar from "../../public/images/author/avatar.png";
export const siteConfig = {
  name: "Code & Learn",
  description:
    "Chào mừng đến với blog cá nhân của tôi! Nơi tôi chia sẻ những suy nghĩ, kinh nghiệm và kiến thức về lập trình, công nghệ và cuộc sống.",
  author: "Nguyen Thai Dat",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/Zezliz",
    facebook: "https://www.facebook.com/zezliz78/",
  },
};

export type SiteConfig = typeof siteConfig;

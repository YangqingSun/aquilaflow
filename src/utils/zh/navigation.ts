// 导航栏链接
const navBarLinks = [
  { name: "首页", url: "/zh" },
  { name: "服务", url: "/zh/services" },
  { name: "联系我们", url: "/zh/contact" },
];

// 页脚链接
const footerLinks = [
  {
    section: "服务",
    links: [
      { name: "PCB 设计与可制造性", url: "/zh/services" },
      { name: "自动化测试系统", url: "/zh/services" },
      { name: "硬件调试", url: "/zh/services" },
    ],
  },
  {
    section: "公司",
    links: [
      { name: "关于我们", url: "#" },
      { name: "联系我们", url: "/zh/contact" },
    ],
  },
];

// 社交媒体链接
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};


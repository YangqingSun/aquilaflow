// 내비게이션 바 링크
const navBarLinks = [
  { name: "홈", url: "/ko" },
  { name: "서비스", url: "/ko/services" },
  { name: "문의하기", url: "/ko/contact" },
];

// 푸터 링크
const footerLinks = [
  {
    section: "서비스",
    links: [
      { name: "PCB 설계 및 DFM", url: "/ko/services" },
      { name: "자동화 테스트 시스템", url: "/ko/services" },
      { name: "하드웨어 디버깅", url: "/ko/services" },
    ],
  },
  {
    section: "회사",
    links: [
      { name: "회사 소개", url: "#" },
      { name: "문의하기", url: "/ko/contact" },
    ],
  },
];

// 소셜 미디어 링크
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

// ナビゲーションバーのリンク
const navBarLinks = [
  { name: "ホーム", url: "/ja" },
  { name: "サービス", url: "/ja/services" },
  { name: "お問い合わせ", url: "/ja/contact" },
];

// フッターのリンク
const footerLinks = [
  {
    section: "サービス",
    links: [
      { name: "PCB設計とDFM", url: "/ja/services" },
      { name: "自動テストシステム", url: "/ja/services" },
      { name: "ハードウェアデバッグ", url: "/ja/services" },
    ],
  },
  {
    section: "会社",
    links: [
      { name: "私たちについて", url: "#" },
      { name: "お問い合わせ", url: "/ja/contact" },
    ],
  },
];

// ソーシャルメディアのリンク
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

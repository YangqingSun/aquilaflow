// Navigationsleisten-Links
const navBarLinks = [
  { name: "Startseite", url: "/de" },
  { name: "Dienstleistungen", url: "/de/services" },
  { name: "Kontakt", url: "/de/contact" },
];

// Footer-Links
const footerLinks = [
  {
    section: "Dienstleistungen",
    links: [
      { name: "PCB-Design & DFM", url: "/de/services" },
      { name: "Automatisierte Testsysteme", url: "/de/services" },
      { name: "Hardware-Debugging", url: "/de/services" },
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über uns", url: "#" },
      { name: "Kontakt", url: "/de/contact" },
    ],
  },
];

// Social-Media-Links
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

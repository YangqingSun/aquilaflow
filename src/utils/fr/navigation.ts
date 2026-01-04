// Liens de la barre de navigation
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Services", url: "/fr/services" },
  { name: "Contact", url: "/fr/contact" },
];

// Liens du pied de page
const footerLinks = [
  {
    section: "Services",
    links: [
      { name: "Conception PCB et DFM", url: "/fr/services" },
      { name: "Systèmes de Test Automatisés", url: "/fr/services" },
      { name: "Débogage Matériel", url: "/fr/services" },
    ],
  },
  {
    section: "Entreprise",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Contact", url: "/fr/contact" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
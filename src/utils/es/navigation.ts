// Enlaces de la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Servicios", url: "/es/services" },
  { name: "Contacto", url: "/es/contact" },
];

// Enlaces del pie de página
const footerLinks = [
  {
    section: "Servicios",
    links: [
      { name: "Diseño de PCB y DFM", url: "/es/services" },
      { name: "Sistemas de Pruebas Automatizadas", url: "/es/services" },
      { name: "Depuración de Hardware", url: "/es/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Acerca de nosotros", url: "#" },
      { name: "Contacto", url: "/es/contact" },
    ],
  },
];

// Enlaces de redes sociales
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

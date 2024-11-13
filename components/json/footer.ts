
import type { FooterLinks } from "../../types/FooterLinks";
//every link should have text and link further adjusctment
const FooterLinks: FooterLinks[] = [
  {
    title: "footer.services.title",
    link: [
      {
        text: "footer.services.consultations.text",
        link: "",
      },
      {
        text: "footer.services.communication.text",
        link: "",
      },
      {
        text: "footer.services.Health-Application.text",
        link: "",
      },
      {
        text: "footer.services.Patient-Application.text",
        link: "",
      },
    ],
  },
  {
    title: "footer.quicklinks.title",
    link: [
      {
        text: "footer.quicklinks.blog.text",
        link: "",
      },
      {
        text: "footer.quicklinks.platform.text",
        link: "",
      },
      {
        text: "footer.quicklinks.contact.text",
        link: "",
      },
      {
        text: "footer.quicklinks.FQAS.text",
        link: "",
      },
    ],
  },
  {
    title: "footer.contactUs.title",
    link: [
      {
        text: "footer.contactUs.whatsapp.text",
        icon: "mdi-whatsapp",
        link: "footer.contactUs.Health-Application.text",
      },
      {
        text: "footer.contactUs.email.text",
        icon: "mdi-email-outline",
        link: "footer.contactUs.Health-Application.text",
      },
      {
        text: "footer.contactUs.map.text",
        icon: "mdi-map-marker",
        link: "footer.contactUs.Health-Application.text",
      },
    ],
  },
];

export default FooterLinks;

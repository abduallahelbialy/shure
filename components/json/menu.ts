import type { MenuItem } from "../../types/MenuItem";
const menuItems: MenuItem[] = [
  {
    id: 2,
    label: "menuitems.home.text",
    isTitle: false,
    route: "/",
  },
  {
    id: 2,
    label: "menuitems.services.text",
    isTitle: false,
    route: "/services",
  },
  {
    id: 3,
    label: "menuitems.questions.text",
    isTitle: false,
    route: "home",
  },
  {
    id: 4,
    label: "menuitems.blog.text",
    isTitle: false,
    route: "/blogs",
  },
  {
    id: 5,
    label: "menuitems.contact.text",
    isTitle: false,
    route: "/contact-us",
  },
];
export default menuItems;

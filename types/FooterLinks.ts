export type FooterLinkItem = {
  text: string;
  link: string; 
  icon?: string; 
};


export type FooterLinks = {
  title: string;
  link: FooterLinkItem[]; 
};

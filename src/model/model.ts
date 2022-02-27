export interface Blog {
  _id?: number;
  title: string;
  text: string;
  date: Date;
  image: string;
  author: string;
  paragraphs: BlogParagraph[];
}

export interface BlogParagraph {
  title?: string;
  text: string;
  image?: string;
  quote?: string;
}

export type Link = {
  title?: any;
  text: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export type Footer = {
  links: Link[];
  about: {
    title: string;
    text: string;
  };
  contact: {
    email: Link;
    website: Link;
    socialmedia: {
      icon: string;
      href: string;
    }[];
  };
};

export type User = {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  role?: string;
};

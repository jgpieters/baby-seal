export interface Blog {
  _id?: string;
  title: string;
  text: string;
  image: string;
  date: Date;
  author: string;
  paragraphs: BlogParagraph[];
}

export interface Vlog {
  _id?: string;
  title: string;
  text: string;
  url: string;
  date: Date;
}

export interface Section {
  _id?: string;
  title: string;
  text: string;
  images: string[];
  url: string;
  date: Date;
  type: string;
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
  name?: string;
  username: string;
  password: string;
  passwordConfirm?: string;
  role?: string;
  token?: string;
  id?: string;
};

export enum SectionTextType {
  INTRO,
  INTRO_TYRONE,
  INTRO_JORIS,
}

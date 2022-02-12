export interface Blog {
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

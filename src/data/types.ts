export type Entry = {
  id: string;
  title: string;
  description?: string;

  images: string[];
  body?: string;

  links?: { label: string; href: string }[];
  tags?: string[];
};
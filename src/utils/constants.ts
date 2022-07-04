export type Theme = "light" | "dark";
export type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  star: number;
  like: number;
  unlike: number;
  commentNum: number;
  views: number;
};
export type Author = {
  id: string;
  name: string;
  avatar: string;
  signature: string;
};
export type Answer = {
  like: number;
  title: string;
};

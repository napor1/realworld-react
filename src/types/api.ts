export type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};

export type Profile = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favourited: boolean;
  favouritiesCount: number;
  author: Profile;
};

export type Articles = {
  articles: Omit<Article, "body">[];
  articlesCount: number;
};

export type Comment = {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
};

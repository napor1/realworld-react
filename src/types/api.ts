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
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};

export type ListArticle = Omit<Article, "body"> & {
  _fmtUpdatedAt: string;
};

export type Articles = {
  articles: ListArticle[];
  articlesCount: number;
};

export type Comment = {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
};

export const paths = {
  root: {
    path: "/",
    getHref: () => "/",
  },
  home: {
    path: "",
    getHref: () => "",
  },
  settings: {
    path: "/settings",
    getHref: () => "/settings",
  },
  editor: {
    path: "/editor",
  },
  article: {
    path: "/article",
  },
  profile: {
    path: "/profile/:username",
    favorites: {
      path: "/profile/:username/favorites",
    },
  },
  auth: {
    login: {
      path: "/auth/login",
      getHref: () => "/auth/login",
    },
    register: {
      path: "/auth/register",
      getHref: () => "/auth/register",
    },
  },
} as const;

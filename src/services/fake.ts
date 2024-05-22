const ApiEnum = {
  articles: '/articles',
  tags: '/tags',
  profiles: '/profiles',
  users: '/users',
  user: '/user'
}

export const API = Object.entries(ApiEnum).reduce((a, [key, val]) => {
  return {
    ...a,
    [key]: '/api' + val
  }
}, {}) as typeof ApiEnum
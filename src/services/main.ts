import axios from "@/shared/lib/axios/axios";
import { faker } from "@faker-js/faker";
import { API } from "./fake";

export function getFakeList() {
  const list = new Array(100).fill(0).map(() => ({
    id: faker.string.uuid(),
    bio: faker.person.bio(),
    name: faker.person.fullName(),
    content: faker.hacker.phrase(),
  }));
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("GET", list);
      resolve(list);
    }, 1000)
  );
}

export function postSth() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function getFakeListAsync() {
  const list = new Array(100).fill(0).map(() => ({
    id: faker.string.uuid(),
    bio: faker.person.bio(),
    name: faker.person.fullName(),
    content: faker.hacker.phrase(),
  }));
  const res = await new Promise((resolve) =>
    setTimeout(() => {
      console.log("GET", list);
      resolve(list);
    }, 1000)
  );

  return res;
}


export function getArticles() {
  // return axios.get('/api/articles')
  return axios.get(API.articles + '?limit=10&offset=0');
  
}
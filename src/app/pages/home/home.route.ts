import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from "@/shared/lib/react-router";
import { HomePage } from "./home-page";
// import { getFakeList } from "@/api/main";

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(HomePage),
  // loader: async (args) => {
  //   const res = await getFakeList()
  //   console.log(args, res);
  //   return args;
  // }
};

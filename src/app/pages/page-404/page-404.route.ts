import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { Page404 } from "./page-404";
import { pathKeys } from "@/shared/lib/react-router";

export const page404Route: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(Page404),
};

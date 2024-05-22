import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "@/shared/lib/react-router";
import { LoginPage } from "./login-page";

export const loginPageRoute: RouteObject = {
  path: pathKeys.login(),
  element: createElement(LoginPage),
};

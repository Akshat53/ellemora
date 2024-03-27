import { ReactNode } from "react";

interface Route {
  path: string;
  element: ReactNode
}

interface Routes extends Array<Route>{}

export default Routes;

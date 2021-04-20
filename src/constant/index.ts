import { Add } from "views/Add/Add";
import { Home } from "views/Home/Home";

export const routes = [
  {
    name: "Home",
    path: "/",
    routerPath: "/",
    component: Home,
    exact: true,
  },
  {
    name: "Add character",
    path: "/add",
    routerPath: "/add",
    component: Add,
    exact: false,
  },
  {
    name: "Edit character",
    path: "/edit",
    routerPath: "/edit/:id",
    component: Add,
    exact: false,
  },
];

import { Add } from "views/Add/Add";
import { Home } from "views/Home/Home";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    routerPath: "/",
    component: Home,
    exact: true,
  },
  add: {
    name: "Add character",
    path: "/add",
    routerPath: "/add",
    component: Add,
    exact: false,
  },
  edit: {
    name: "Edit character",
    path: "/edit",
    routerPath: "/edit/:id",
    component: Add,
    exact: false,
  },
};

export const actionBar = {
  textField: { label: "Search character", name: "searchbar" },
  button: "Add new character",
};

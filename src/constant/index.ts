import { Add } from "views/Add/Add";
import { Edit } from "views/Edit/Edit";
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
    component: Edit,
    exact: false,
  },
};

export const actionBar = {
  textField: { label: "Search character", name: "searchbar" },
  button: "Add new character",
};

export const charactersTableRow = {
  editButton: "Edit",
  deleteButton: "Delete",
};

export const charactersTableHeadCells = {
  id: {
    name: "ID",
    align: undefined,
  },
  name: {
    name: "Name",
    align: "right",
  },
  species: {
    name: "Species",
    align: "right",
  },
  gender: {
    name: "Gender",
    align: "right",
  },
  homeworld: {
    name: "Homeworld",
    align: "right",
  },
  actions: {
    name: "Actions",
    align: "right",
  },
};

export const characterForm = {
  addHeader: "Add new character",
  editHeader: "Edit character",
  addButton: "Submit new character",
  editButton: "Submit changes",
};

export const characterFormSelect = {
  name: "Specie",
  label: "species",
};

export const characterFormRadio = {
  gendersArr: ["Female", "Male", "N/A"],
  name: "Gender",
  label: "gender",
};

export const characterFormInput = {
  nameLabel: "Name",
  homeworldLabel: "Homeworld",
};

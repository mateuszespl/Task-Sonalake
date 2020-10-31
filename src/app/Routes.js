import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "../features/main/Main";
import { Add } from "../views/Add";
import { Edit } from "../views/Edit";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/add" render={() => <Add />} />
        <Route path="/edit/:id" render={() => <Edit />} />
      </Switch>
    </Router>
  );
};

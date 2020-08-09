import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "../features/main/Main";
import { CharacterForm } from "../features/characterForm/CharacterForm";
import { Navigation } from "../features/navigation/Navigation";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Main route */}
          <Navigation />
          <Main />
        </Route>
        <Route path="/add">
          {/* Add character form route */}
          <Navigation />
          <CharacterForm />
        </Route>
        <Route path="/edit/:id">
          {/* Edit character (filtered by his :id) form route */}
          <Navigation />
          <CharacterForm edit />
        </Route>
      </Switch>
    </Router>
  );
};

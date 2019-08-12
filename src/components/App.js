import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main";
import Login from "./Login";
import Bunny from "./Bunny";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bunny" component={Bunny} />
      </Switch>
    </div>
  );
};

export default App;

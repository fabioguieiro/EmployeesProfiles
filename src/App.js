import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import EmployeesList from "./screens/EmployeesList"
import Employee from "./screens/Employee"

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={EmployeesList}
          exact
        />
        <Route
          path="/employee/:id"
          component={Employee}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

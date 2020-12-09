import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import HomePage from './Main/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

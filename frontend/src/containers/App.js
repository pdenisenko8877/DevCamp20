import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import HomePage from 'containers/Main/HomePage';
import ArticlePage from 'containers/Main/ArticlePage';
import ArticleCreatePage from 'containers/Main/ArticlePage/Create';
import ProfilePage from 'containers/Main/ProfilePage';
import ProfileEditPage from 'containers/Main/ProfilePage/Edit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/article" exact component={ArticlePage} />
        <Route path="/article/create" exact component={ArticleCreatePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/edit" exact component={ProfileEditPage} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

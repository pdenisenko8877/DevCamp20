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
        <Route
          path={[
            '/users',
            '/users/:id(\\d+)/(edit|avatar|file)?',
            '/users/:id(\\d+)/avatar/(edit|delete)?',
            '/users/:id(\\d+)/file/(\\d+)-([a-z]{1,10})-(\\d{4}-\\d{2}-\\d{2}).(docx|jpeg|pdf|txt)/v.(\\d{1}).(\\d{1}).(\\d{1})',
          ]}
          exact
          component={ProfilePage}
        />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

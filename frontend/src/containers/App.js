import React from 'react';
import { Switch, Route, BrowserRouter, Redirect, useParams } from 'react-router-dom';

import HomePage from 'containers/Main/HomePage';
import ArticlePage from 'containers/Main/ArticlePage';
import ArticleCreatePage from 'containers/Main/ArticlePage/Create';
import ArticleEditPage from 'containers/Main/ArticlePage/Edit';
import ProfilePage from 'containers/Main/ProfilePage';
import ProfileEditPage from 'containers/Main/ProfilePage/Edit';
import LoginPage from 'containers/Auth/LoginPage';

function ProfileDateCheck() {
  const { date } = useParams();

  const today = new Date();
  const routeDate = new Date(date);

  return routeDate >= today && <ProfilePage />;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path={'/article/:id(\\d+)'} exact component={ArticlePage} />
        <Route path="/article/create" exact component={ArticleCreatePage} />
        <Route path={'/article/edit/:id(\\d+)'} exact component={ArticleEditPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/edit" exact component={ProfileEditPage} />
        <Route
          path={['/users', '/users/:id(\\d+)/(edit|avatar|file)?', '/users/:id(\\d+)/avatar/(edit|delete)?']}
          exact
          component={ProfilePage}
        />
        <Route
          path={
            '/users/:id(\\d+)/file/(\\d+)-([a-z]{1,10})-:date(\\d{4}-\\d{2}-\\d{2}).(docx|jpeg|pdf|txt)/v.(\\d{1}).(\\d{1}).(\\d{1})'
          }
          exact
        >
          <ProfileDateCheck />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

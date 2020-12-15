import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { MainLayout } from 'components/layouts';
import { ProfileForm } from 'components/Users';
import { Article, ArticleForm } from 'components/Articles';

import { ACTIONS } from './constants';

function HomePage() {
  const [action, setAction] = useState(ACTIONS.PROFILE);
  const [username, setUsername] = useState(undefined);

  const handleButtonClick = value => {
    setAction(value);
  };

  const handleProfileSubmit = event => {
    event.preventDefault();
    setUsername(`${event.target[0].value} ${event.target[2].value}`);
  };

  return (
    <MainLayout
      headerAction={
        <>
          <Box mr={1}>
            <Button variant="contained" color="secondary" onClick={() => handleButtonClick(ACTIONS.ARTICLES)}>
              Articles
            </Button>
          </Box>
          <Box mr={1}>
            <Button variant="contained" color="secondary" onClick={() => handleButtonClick(ACTIONS.ADD_ARTICLES)}>
              Add Articles
            </Button>
          </Box>
          <Box mr={1}>
            <Button variant="contained" color="secondary" onClick={() => handleButtonClick(ACTIONS.PROFILE)}>
              Profile {username}
            </Button>
          </Box>
        </>
      }
    >
      <Typography variant="h4" component="h1" gutterBottom>
        The Net - <span className="font-normal">First Social Network</span>
      </Typography>
      {action === ACTIONS.ARTICLES && <Article />}
      {action === ACTIONS.ADD_ARTICLES && <ArticleForm />}
      {action === ACTIONS.PROFILE && <ProfileForm handleSubmit={handleProfileSubmit} />}
    </MainLayout>
  );
}

export default HomePage;

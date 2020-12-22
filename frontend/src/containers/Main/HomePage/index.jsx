import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { MainLayout } from 'components/layouts';
import { ProfileForm } from 'components/Users';
import { Article, ArticleForm } from 'components/Articles';

import { ACTIONS } from './constants';

//TODO: Test example API data
const userData = {
  id: 1,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 25,
  avatar: {
    fileId: 1,
    file: {
      id: 1,
      name: 'photo.jpg',
      path: '/upload/photo.jpg',
      size: 1234,
    },
  },
  friends: [{}, {}, {}], //array of users
  articles: [
    {
      title: 'Article 1',
      text: 'Some text',
      images: [{}, {}, {}], // array of files
      createdAt: '2020-12-17 19:00:00',
      editedAt: '2020-12-17 20:00:00',
      likes: [
        { userId: 2, user: { id: 2 }, date: '2020-12-17 21:00:00' },
        { userId: 3, user: { id: 3 }, date: '2020-12-17 22:00:00' },
      ],
    },
  ],
};

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
      {action === ACTIONS.PROFILE && <ProfileForm handleSubmit={handleProfileSubmit} userData={userData} />}
    </MainLayout>
  );
}

export default HomePage;

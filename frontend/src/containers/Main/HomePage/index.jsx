import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { MainLayout } from 'components/layouts';
import { ProfileForm } from 'components/Users';
import { Article, ArticleForm } from 'components/Articles';

function HomePage() {
  const [state, setState] = useState({
    article: false,
    addArticle: false,
    profile: true,
  });
  const { article, addArticle, profile } = state;
  const [name, setName] = useState(undefined);
  const [surname, setSurname] = useState(undefined);

  const handleButtonClick = newState => () => {
    setState({ ...newState });
  };

  const handleProfileSubmit = event => {
    event.preventDefault();
    setName(event.target[0].value);
    setSurname(event.target[2].value);
  };

  return (
    <MainLayout
      headerAction={
        <>
          <Box mr={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleButtonClick({ article: true, addArticle: false, profile: false })}
            >
              Articles
            </Button>
          </Box>
          <Box mr={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleButtonClick({ article: false, addArticle: true, profile: false })}
            >
              Add Articles
            </Button>
          </Box>
          <Box mr={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleButtonClick({ article: false, addArticle: false, profile: true })}
            >
              Profile&nbsp;
              {(name || surname) && (
                <>
                  ({name} {surname})
                </>
              )}
            </Button>
          </Box>
        </>
      }
    >
      <Typography variant="h4" component="h1" gutterBottom>
        The Net - <span className="font-normal">First Social Network</span>
      </Typography>
      {article && <Article />}
      {addArticle && <ArticleForm />}
      {profile && <ProfileForm handleSubmit={handleProfileSubmit} />}
    </MainLayout>
  );
}

export default HomePage;

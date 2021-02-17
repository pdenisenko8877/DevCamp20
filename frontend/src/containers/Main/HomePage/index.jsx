import React from 'react';

import Typography from '@material-ui/core/Typography';

import { MainLayout } from 'components/layouts';
import { ArticleList } from 'components/Articles';

function HomePage() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        The Net - <span className="font-normal">First Social Network</span>
      </Typography>

      <ArticleList />
    </MainLayout>
  );
}

export default HomePage;

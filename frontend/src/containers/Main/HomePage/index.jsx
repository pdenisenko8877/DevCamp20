import React from 'react';

import Typography from '@material-ui/core/Typography';

import { MainLayout } from '../../../components/layouts';

function HomePage() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h1">
        The Net - <span className="font-normal">First Social Network</span>
      </Typography>
    </MainLayout>
  );
}

export default HomePage;

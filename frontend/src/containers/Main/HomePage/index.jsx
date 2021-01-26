import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { MainLayout } from 'components/layouts';

function HomePage() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        The Net - <span className="font-normal">First Social Network</span>
      </Typography>

      <Paper variant="outlined">
        <Box p={2}>
          <Typography variant="h5" component="h3" gutterBottom>
            Article title
          </Typography>
          <Typography paragraph>Article short text description.</Typography>
          <Box mt={1} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" component={Link} to="/article">
              Read More
            </Button>
          </Box>
        </Box>
      </Paper>
    </MainLayout>
  );
}

export default HomePage;

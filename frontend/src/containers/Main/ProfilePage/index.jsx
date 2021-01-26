import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MainLayout } from 'components/layouts';

function ProfilePage() {
  return (
    <MainLayout>
      <Typography variant="h5" component="h3" gutterBottom>
        User Profile Page
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/profile/edit">
        Edit Profile
      </Button>
    </MainLayout>
  );
}

export default ProfilePage;

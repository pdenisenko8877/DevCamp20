import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function ProfileForm({ handleSubmit }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <Typography variant="h5" component="h3" gutterBottom>
          Profile Form
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField label="Name" name="name" variant="outlined" margin="normal" fullWidth required />
          <TextField label="Surname" name="surname" variant="outlined" margin="normal" fullWidth required />
          <FormControl margin="normal">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
}

export default ProfileForm;

import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

import LoginSocial from 'components/Auth/components/LoginSocial';

import styles from './styles';

const useStyles = makeStyles(styles);

function LoginPage() {
  const classes = useStyles();

  return (
    <Container className={classes.authContainer}>
      <LoginSocial />
    </Container>
  );
}

export default LoginPage;

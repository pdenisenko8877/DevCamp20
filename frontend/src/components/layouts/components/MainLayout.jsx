import React, { memo } from 'react';
import cx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from '../../../images/logo.svg';

import styles from '../styles/main';

const useStyles = makeStyles(styles);

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer} maxWidth="lg">
      <AppBar position="fixed">
        <Toolbar className={classes.headerToolbar}>
          <Box display="flex" alignItems="center" mr={1}>
            <img className={classes.headerLogo} src={logo} alt="The Net" />
            <div className={classes.headerSiteName}>The Net</div>
          </Box>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.mainContainer}>
        <Toolbar disableGutters />
        <div className={cx(classes.mainContent, classes.mainContentIndent)}>{children}</div>
      </main>
    </Container>
  );
};

export default memo(MainLayout);

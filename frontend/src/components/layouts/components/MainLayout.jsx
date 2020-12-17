import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from 'images/logo.svg';

import styles from '../styles/main';

const useStyles = makeStyles(styles);

const MainLayout = ({ children, headerAction }) => {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer} maxWidth="lg">
      <AppBar position="fixed">
        <Toolbar className={classes.headerToolbar}>
          <Box display="flex" alignItems="center" mr={1}>
            <img className={classes.headerLogo} src={logo} alt="The Net" />
            <div className={classes.headerSiteName}>The Net</div>
          </Box>
          <Box display="flex" alignItems="center">
            {headerAction}
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.mainContainer}>
        <Toolbar disableGutters />
        <div className={cx(classes.mainContent, classes.mainContentIndent)}>{children}</div>
      </main>
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerAction: PropTypes.node,
};

export default memo(MainLayout);
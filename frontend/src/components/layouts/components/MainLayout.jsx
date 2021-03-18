import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import { ArticleCreateModal } from 'components/Articles';
import useModal from 'components/Modal/hook';
import logo from 'images/logo.svg';

import styles from '../styles/main';

const useStyles = makeStyles(styles);

const MainLayout = ({ children, headerAction, username }) => {
  const classes = useStyles();
  const [openModal, modalProps] = useModal();

  return (
    <Container className={classes.rootContainer} maxWidth="lg">
      <AppBar position="fixed">
        <Toolbar className={classes.headerToolbar}>
          <Link to="/">
            <Box display="flex" alignItems="center" mr={1}>
              <img className={classes.headerLogo} src={logo} alt="The Net" />
              <div className={classes.headerSiteName}>The Net</div>
            </Box>
          </Link>
          <Box display="flex" alignItems="center">
            {headerAction}
            <Box mr={1}>
              <Button
                variant="contained"
                color="secondary"
                onClick={openModal}
                startIcon={<AddIcon />}
              >
                Add Article
              </Button>
            </Box>
            <IconButton color="inherit" component={Link} to="/profile">
              <AccountCircleIcon />
              {username && <Box ml={1}>{username}</Box>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.mainContainer}>
        <Toolbar disableGutters />
        <div className={cx(classes.mainContent, classes.mainContentIndent)}>{children}</div>
      </main>
      <ArticleCreateModal {...modalProps} />
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerAction: PropTypes.node,
};

export default memo(MainLayout);

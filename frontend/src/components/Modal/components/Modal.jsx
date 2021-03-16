import React, { memo } from 'react';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import styles from '../styles';

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Modal = ({ children, open, title, subtitle, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      scroll="body"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle className={classes.modalTitle}>
        {title}
        {subtitle && (
          <DialogContentText>{subtitle}</DialogContentText>
        )}
        <IconButton className={classes.modalCloseButton} onClick={handleClose}>
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default memo(Modal);

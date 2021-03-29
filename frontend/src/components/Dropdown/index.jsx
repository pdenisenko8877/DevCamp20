import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Paper,
  Popper,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  ButtonProps,
  PopperProps,
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

interface Props extends ButtonProps, PopperProps {}

export const Option = PropTypes.shape([
  {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  },
]);

function Dropdown({ buttonText, variant, color, options, placement = 'bottom-end', className = '' }: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button className={className} variant={variant} color={color} ref={anchorRef} onClick={handleToggle}>
        {buttonText}
      </Button>
      <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} placement={placement} transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose} mouseEvent="onMouseUp">
                <MenuList className={classes.menuList}>
                  {options.map(option => (
                    <MenuItem key={option.id} onClick={option.onClick}>
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

Dropdown.propTypes = {
  buttonText: PropTypes.node.isRequired,
  options: Option.isRequired,
  className: PropTypes.string,
};

export default memo(Dropdown);

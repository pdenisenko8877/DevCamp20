import { createStyles, Theme } from '@material-ui/core/styles';

const style = (theme: Theme) =>
  createStyles({
    menuList: {
      minWidth: 150,
    },
    popper: {
      zIndex: theme.zIndex.appBar + 1,
    },
  });

export default style;

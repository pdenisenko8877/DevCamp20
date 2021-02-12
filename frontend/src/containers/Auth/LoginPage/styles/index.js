import { createStyles } from '@material-ui/core/styles';

export default () =>
  createStyles({
    authContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100%',
    },
  });

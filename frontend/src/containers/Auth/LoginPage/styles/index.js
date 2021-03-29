import { createStyles } from '@material-ui/core/styles';

const style = () =>
  createStyles({
    authContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100%',
    },
  });

export default style;

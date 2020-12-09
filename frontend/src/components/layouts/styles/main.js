import { createStyles } from '@material-ui/core/styles';

import { layoutHorizontalPadding, colorWhite } from '../../../styles/variables';

export default theme =>
  createStyles({
    rootContainer: {
      backgroundColor: colorWhite,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    },

    // Header
    headerToolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLogo: {
      width: 50,
      height: 40,
      marginRight: 5,
    },
    headerSiteName: {
      fontSize: 18,
      fontWeight: 700,
    },

    // Main
    mainContainer: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      maxWidth: '100%',
      minWidth: 0,
    },
    mainContentIndent: {
      ...layoutHorizontalPadding(theme),
    },
    mainContent: {
      flexGrow: 1,
      paddingTop: 15,
      paddingBottom: 20,

      [theme.breakpoints.up('md')]: {
        paddingTop: 20,
        paddingBottom: 30,
      },
    },
  });

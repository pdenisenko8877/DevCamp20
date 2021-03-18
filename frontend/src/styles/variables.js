// Variables - Styles
const fontFamily = '"Roboto", sans-serif';

const layoutHorizontalPadding = theme => ({
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

// Color
const colorWhite = '#FFF';
const colorGrey = '#7B8697';

// Background Color
const bgBody = '#F2F2F2';

export {
    fontFamily,
    layoutHorizontalPadding,
    colorWhite,
    colorGrey,
    bgBody
};

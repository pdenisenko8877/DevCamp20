import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { bgBody } from './variables';

const breakpoints = createBreakpoints({});

export default createMuiTheme({
  breakpoints,
  palette: {},
  typography: {},
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%"
        },
        body: {
          "&, & > .root-container": {
            height: "100%",
            backgroundColor: bgBody
          }
        }
      }
    }
  }
});

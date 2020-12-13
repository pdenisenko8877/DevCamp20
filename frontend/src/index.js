import * as React from 'react';
import ReactDOM from 'react-dom';

//Styles
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'styles/theme';
import { CustomStyle } from 'styles/custom-styles';

// Import root app
import App from 'containers/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      <CssBaseline />
      <CustomStyle />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

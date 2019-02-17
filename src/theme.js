/**
 *
 * theme.js
 * Theme setup --> Material UI
 */

import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// import pink from '@material-ui/core/colors/pink';
// import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;

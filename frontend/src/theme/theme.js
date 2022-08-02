import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';

// const theme = createTheme(); // DEFAULT THEME

// CUSTOM THEME
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(147, 42, 30)',
    },
    text: {
      primary: 'rgb(30, 32, 34)',
      secondary: 'rgb(103, 119, 136)',
    },
    alternate: {
      main: 'rgb(247, 250, 255)',
      dark: 'rgb(237, 241, 247)',
    },
  },
  typography: typography,
  components: components,
});

export default theme;
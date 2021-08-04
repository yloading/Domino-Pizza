import useStyles from './styles'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Container, Grid, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Home from './components/Home'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

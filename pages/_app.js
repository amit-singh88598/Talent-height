import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#190061",

      light: "#f6f0e2",
      background: "#240090",
    },
    secondary: {
      main: "#f8e9a1",
      white: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;

import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "../auth";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",

      light: "#f6f0e2",
      background: "#240090",
    },
    secondary: {
      main: "#f8e9a1",
      light: "#68991c", // Green Color
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;

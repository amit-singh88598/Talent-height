import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "../auth";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#9c0609",
      background: "#240090",
    },
    secondary: {
      main: "#170000",
      light: "#68991c", // Green Color
      grey: "#a9a9a9", //Grey
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

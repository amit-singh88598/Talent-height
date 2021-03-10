import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "../auth";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1c82bd", // Mehroon 1c82bd
      light: "#ffffff",
      background: "#9c0609", // Blue
      grey: "#edeff2", //Light Grey
    },
    secondary: {
      main: "#ffffff", // White
      light: "#68991c", // Green Color
      grey: "#a9a9a9", // darkGrey
      background: "#dfe4eb", //Light Grey
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

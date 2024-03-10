import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#009be5",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [4, 8, 12, 16, 20],

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontWeight: 600,
          fontSize: "0.875rem",
          textTransform: "capitalize",
          borderRadius: 2.5,
          "&.MuiButton-contained": {
            backgroundColor: "009be5",
            "&:hover": {
              backgroundColor: "006db3",
            },
          },
          "&.MuiButton-outlined": {
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
});

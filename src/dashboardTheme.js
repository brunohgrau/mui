import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#009be5",
    },
  },
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "0.5px",
      textTransform: "capitalize",
    },
  },
  spacing: [4, 8, 12, 16, 20],

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "0.875rem",
          fontWeight: 600,
          borderRadius: 8.5,
          textTransform: "none",

          "&.MuiButton-contained": {
            backgroundColor: "009be5",
            "&:hover": {
              backgroundColor: "006db3",
            },
          },
          "&.MuiButton-outlined": {
            color: "#fff",
            borderColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.04)",
            },
          },
        },
      },
    },
    MuiSVGIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.75rem",
        },
      },
    },
  },
});

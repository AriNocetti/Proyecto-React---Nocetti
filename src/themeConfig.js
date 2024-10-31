import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: { main: "#9b59b6", mainClaro: "#c39bd3" },
        secondary: { main: "#48c9b0" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                borderRadius: "100px",
                },
            },
        },
    },
});
export const dark = createTheme({
    palette: {
        primary: { main: "#9b59b6", mainClaro: "#c39bd3" },
        secondary: { main: "#48c9b0" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                borderRadius: "100px",
                },
            },
        },
    },
});
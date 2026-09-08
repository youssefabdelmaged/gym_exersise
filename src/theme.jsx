import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#FF2625', // vibrant red from the original design but we'll use a gradient in CSS
          },
          secondary: {
            main: '#f3e8e8',
          },
          background: {
            default: '#FFFAFB',
            paper: '#ffffff',
          },
          text: {
            primary: '#3A1212',
            secondary: '#755c5c',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#FF2625',
          },
          secondary: {
            main: '#2A2A2A',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
          },
        }),
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: mode === 'light' 
            ? '0 10px 30px rgba(0,0,0,0.05)' 
            : '0 10px 30px rgba(0,0,0,0.5)',
        },
      },
    },
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));

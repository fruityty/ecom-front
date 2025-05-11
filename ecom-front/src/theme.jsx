// src/theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',              // make sure you’re in “light” mode
    primary: {
      main: '#FFFFFF',          // you can still use white as a primary color if you like
    },
    secondary: {
      main: '#FDE8E8',
    },
    background: {
      default: '#FFFFFF',       // page background
      paper:   '#FFFFFF',       // surfaces like Paper, Card, AppBar (when color="default")
    },
    text: {
      primary:   '#000000',     // pure black for most text
      secondary: '#333333',     // optional “body2”, disabled, hint text
    },
  },
  typography: {
    fontFamily: '"Your Figma Font", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, color: '#000000' },
    h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3, color: '#000000' },
    body1: { fontSize: '1rem', lineHeight: 1.5, color: '#000000' },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 4,
});

export default theme;

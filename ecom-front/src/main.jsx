import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 1️⃣ Import from @mui/material/styles, not @mui/material
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 2️⃣ Bring in the theme you defined
import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies MUI’s CSS reset and lets your theme’s colors show correctly */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

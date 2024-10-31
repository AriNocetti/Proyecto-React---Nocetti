import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import {customTheme} from "./themeConfig.js";

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);

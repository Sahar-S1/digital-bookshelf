import React from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from './utils/theme';
import DefaultRouter from './router/DefaultRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DefaultRouter />
    </ThemeProvider>
  );
}

export default App;

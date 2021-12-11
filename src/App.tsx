import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@mui/material';

import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import BookPage from './pages/BookPage';
import TestPage from './pages/TestPage';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<ListPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

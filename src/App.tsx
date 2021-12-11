import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<ListPage />} />
        <Route path="book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

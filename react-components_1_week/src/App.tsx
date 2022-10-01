import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import NoteFound from 'components/pages/NoteFound';
import './app.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route index element={<Main />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import About from 'components/pages/About';
import NoteFound from 'components/pages/NoteFound';
import Forms from 'components/pages/Forms';
import './app.css';

function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> */}
      <header>
        <Header />
      </header>
      <Routes>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="forms" element={<Forms />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import About from 'components/pages/About';
import NoteFound from 'components/pages/NoteFound';
import Forms from 'components/pages/Forms';
import IdCard from 'components/pages/IdCard';
import './app.css';

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/:id" element={<IdCard />} />
        <Route path="about" element={<About />} />
        <Route path="forms" element={<Forms />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </div>
  );
}

export default App;

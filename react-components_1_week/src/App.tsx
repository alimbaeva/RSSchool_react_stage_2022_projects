import React, { useContext, useState, createContext, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import About from 'components/pages/About';
import NoteFound from 'components/pages/NoteFound';
import Forms from 'components/pages/Forms';
import './app.css';

interface Typecontext {
  dataSearch: string[];
  set: (el: string[]) => void;
}

const initial = { dataSearch: ['1', '', '', ''], set: (el: string[]) => null };

export const UserContext = createContext<Typecontext>(initial);

function App() {
  const [dataSearch, setDataSearch] = useState<string[]>(['1', '', '', '']);
  const set = (el: string[]) => {
    setDataSearch(el);
  };

  return (
    <UserContext.Provider value={{ dataSearch, set }}>
      <div className="app">
        <header>
          <Header />
        </header>
        <UserContext.Provider value={{ dataSearch, set }}></UserContext.Provider>
        <Routes>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="forms" element={<Forms />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;

import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import About from 'components/pages/About';
import NoteFound from 'components/pages/NoteFound';
import Forms from 'components/pages/Forms';
import { UserContext } from './components/context/UseContext';
import { reducerSearch } from './components/reduser/Reduser';
import { StateType, Action, initialStateSearch } from './components/reduser/reduserTypes';
// import { Typecontext } from './Types';
import './app.css';

// const initial = { dataSearch: ['1', '', '', ''], set: () => null };

// export const UserContext = createContext<Typecontext>(initial);

function App() {
  const [state, dispatch] = React.useReducer<React.Reducer<StateType, Action>>(
    reducerSearch,
    initialStateSearch
  );
  // const UserContext = createContext<StateType>(initialStateSearch);
  // const [dataSearch, setDataSearch] = useState<string[]>(['1', '', '', '']);
  // const set = (el: Action) => {
  //   dispatch(el);
  // };

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <header>
          <Header />
        </header>
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

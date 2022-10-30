import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/pages/Main';
import Header from 'components/header/Header';
import About from 'components/pages/About';
import NoteFound from 'components/pages/NoteFound';
import Forms from 'components/pages/Forms';
import { UserContext } from './components/context/UseContext';
import { reducerSearch } from './components/reduser/Reduser';
import { StateType, Action, initialStateSearch } from './components/reduser/reduserTypes';
import './app.css';
import IdCard from 'components/pages/IdCard';

function App() {
  const [state, dispatch] = React.useReducer<React.Reducer<StateType, Action>>(
    reducerSearch,
    initialStateSearch
  );

  return (
    <UserContext.Provider value={{ state, dispatch }}>
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
    </UserContext.Provider>
  );
}

export default App;

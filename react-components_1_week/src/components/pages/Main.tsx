import React from 'react';
import Search from 'components/search/Search';

export default class Main extends React.Component {
  render(): React.ReactNode {
    document.title = `React Component RS`;
    return (
      <>
        <Search />
      </>
    );
  }
}

import React from 'react';
// import RenderCarts from 'components/carts/RenderCarts';
import Search from 'components/search/Search';

export default class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Search />
        {/* <RenderCarts value={[]} /> */}
      </>
    );
  }
}

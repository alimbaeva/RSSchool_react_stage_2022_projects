import React from 'react';
import Carts from './Carts';
import { Character } from '../../rickiMartyTypes';
type State = {
  value: [];
};

export default class RenderCarts extends React.Component<{ value: [] | Character[] }> {
  data: Character[] | undefined;
  loading: boolean;
  state: State;
  constructor(props: State) {
    super(props);
    this.state = {
      value: [],
    };
    this.loading = false;
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?status=Dead`);
      const data = await response.json();
      setTimeout(() => {
        this.loading = true;
        this.setState({ value: data.results });
        console.log(data.results);
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div data-testid="main-page" className="carts-block">
          {this.state.value.map((cart: Character, id: number) => {
            console.log('==');
            return <Carts carts={cart} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

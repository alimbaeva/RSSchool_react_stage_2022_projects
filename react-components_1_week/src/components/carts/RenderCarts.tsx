import React from 'react';
import Carts from './Carts';
import { Character } from '../../rickiMartyTypes';
type State = {
  value: [];
};

export default class RenderCarts extends React.Component<{ value: string | Character[] }> {
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
      const nameSearch = this.props.value ? this.props.value : '';
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`);
      const data = await response.json();
      setTimeout(() => {
        this.loading = true;
        this.setState({ value: data.results });
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  }

  render(): React.ReactNode {
    // console.log(this.props.value);
    return (
      <div className="container">
        <div data-testid="main-page" className="carts-block">
          {this.state.value.map((cart: Character, id: number) => {
            return <Carts carts={cart} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

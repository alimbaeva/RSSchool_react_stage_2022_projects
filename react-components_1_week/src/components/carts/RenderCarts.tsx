import React from 'react';
import Carts from './Carts';
import ModalcardRender from './ModalcardRender';
import { Character } from '../../rickiMartyTypes';
type State = {
  value: [];
  cardData: Character | null;
  clickCard: string;
};

export default class RenderCarts extends React.Component<{ value: string | Character[] }> {
  data: Character[] | undefined;
  loading: boolean;
  clickCartModal: boolean;
  state: State;
  constructor(props: State) {
    super(props);
    this.state = {
      value: [],
      cardData: null,
      clickCard: '',
    };
    this.loading = true;
    this.clickCartModal = false;
    this.closeModal = this.closeModal.bind(this);
  }

  clickParent = async (event: React.MouseEvent<HTMLElement>) => {
    const eventElem = event.target as HTMLElement;
    const cartID_1 = eventElem.parentNode?.parentElement?.parentElement?.getAttribute('id');
    const cartID_2 = eventElem.parentNode?.parentElement?.getAttribute('id');
    this.setState({ clickCard: cartID_1 ? cartID_1 : cartID_2 ? cartID_2 : '' });
    if (this.state.clickCard) {
      this.clickCartModal = true;
      document.querySelector('.modalCard')?.classList.remove('modalCardNon');
      try {
        const idCard = this.state.clickCard;
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idCard}`);
        const cardData = await response.json();
        this.setState({ cardData: cardData });
      } catch (err) {
        console.log(err);
      }
    }
  };

  closeModal() {
    document.querySelector('.modalCard')?.classList.add('modalCardNon');
    this.clickCartModal = false;
  }

  async componentDidMount() {
    try {
      const nameSearch = this.props.value ? this.props.value : '';
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`);
      const data = await response.json();
      setTimeout(() => {
        this.loading = false;
        this.setState({ value: data.results });
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        {this.clickCartModal && (
          <div className="modalCard" onClick={this.closeModal}>
            clicked
            {this.state.cardData && <ModalcardRender carts={this.state.cardData} key={'1'} />}
          </div>
        )}
        <div data-testid="main-page" className="carts-block" onClick={this.clickParent}>
          {this.loading && <h2>Loading...</h2>}
          {this.state.value.map((cart: Character, id: number) => {
            return <Carts carts={cart} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

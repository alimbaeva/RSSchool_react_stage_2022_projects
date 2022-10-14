import React from 'react';
import { Character } from '../../rickiMartyTypes';
import './ModalcardRender.modul.css';

type Props = {
  carts: Character;
};

export default class ModalcardRender extends React.Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div data-testid="model-card" className="card-modal">
        <h2>${this.props.carts.name}</h2>
        <div className="card-modal_text">
          <h5>Created: {this.props.carts.created}</h5>
          <h5>Location: {this.props.carts.location.name}</h5>
          <h5>Status: {this.props.carts.status}</h5>
          <h5>Type: {this.props.carts.type}</h5>
        </div>
        <div className="card-modal_imgs">
          <img src={this.props.carts.image} alt={this.props.carts.name} />
        </div>
        <p>
          Libraries Here you will find a list of community helper libraries to use the Rick and
          Morty API with your preferred language. You can also quickly start using the API with this
          Postman collection created by loopDelicious. If you are looking for a JavaScript library,
          you can check The Rick and Morty API JavaScript client
        </p>
      </div>
    );
  }
}

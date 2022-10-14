import React from 'react';
// import { CartsT } from 'Types';
import { Character } from '../../rickiMartyTypes';
import './carts.css';

type Props = {
  carts: Character;
};

export default class Carts extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div id={String(this.props.carts.id)} className="cart-item">
        <div className="cart-item__image">
          <img src={this.props.carts.image} alt={this.props.carts.name} />
        </div>
        <img className="medal" src="https://i.ibb.co/NYwBYs7/medal.png" alt="medal" />
        <img
          className="checked"
          src="https://i.ibb.co/HCdCQGK/gui-check-yes-icon-157194.png"
          alt="gui-check-yes-icon-157194"
        />
        <div className="cart-item__text">
          <h3>{this.props.carts.name}</h3>
          <p>{this.props.carts.gender} P</p>
          <div className="cart-item__rating">
            <h5>Created: {this.props.carts.created}</h5>
            <h5>Location: {this.props.carts.location.name}</h5>
            <h5>Status: {this.props.carts.status}</h5>
            <h5>Type: {this.props.carts.type}</h5>
          </div>
          <div className="cart-item__pay">
            <div>
              <img src="https://i.ibb.co/StjPmmN/basket.png" alt="basket" />
              <img
                className="white-hart"
                src="https://i.ibb.co/c6kx2PV/heart-love-wite3.png"
                alt="heart-love-wite3"
              />
              <img className="red-hart" src="https://i.ibb.co/VN2M7Wn/heart.png" alt="heart" />
            </div>
            <div className="count-block">
              <button>
                <img src="https://i.ibb.co/Z62ZWsG/minus.png" alt="minus" />
              </button>
              <span className="count">1</span>
              <button>
                <img src="https://i.ibb.co/rsNWgF1/Plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

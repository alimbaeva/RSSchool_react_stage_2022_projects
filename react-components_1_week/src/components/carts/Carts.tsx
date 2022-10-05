import React, { ReactElement } from 'react';
import { CartsT } from 'Types';
import './carts.css';

interface CartsProps {
  carts: CartsT;
}

export function Carts(carts: CartsProps): ReactElement {
  return (
    <div key={carts.carts.id} className="cart-item">
      <div className="cart-item__image">
        <img src={carts.carts.image} alt={carts.carts.category} />
      </div>
      <img className="medal" src="https://i.ibb.co/NYwBYs7/medal.png" alt="medal" />
      <img
        className="checked"
        src="https://i.ibb.co/HCdCQGK/gui-check-yes-icon-157194.png"
        alt="gui-check-yes-icon-157194"
      />
      <div className="cart-item__text">
        <h3>{carts.carts.title}</h3>
        <p>{carts.carts.price} P</p>
        <div className="cart-item__rating">
          <h4>Rating</h4>
          <p>
            Rate: <span>{carts.carts.rating.rate}</span>
          </p>
          <p>
            Rate: <span>{carts.carts.rating.count}</span>
          </p>
        </div>
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
  );
}

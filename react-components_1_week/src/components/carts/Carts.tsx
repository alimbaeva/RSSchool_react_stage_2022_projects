import React, { ReactElement } from 'react';
import { CartsT } from 'Types';

interface CartsProps {
  carts: CartsT;
}

export function Carts(carts: CartsProps): ReactElement {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={carts.carts.image} alt={carts.carts.category} />
        <img src="https://i.ibb.co/NYwBYs7/medal.png" alt="medal" />
      </div>
      <div className="cart-item__text">
        <h3>{carts.carts.title}</h3>
        <p>{carts.carts.price}</p>
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
        <img src="https://i.ibb.co/StjPmmN/basket.png" alt="basket" />
        <img src="https://i.ibb.co/c6kx2PV/heart-love-wite3.png" alt="heart-love-wite3" />
        <img src="https://i.ibb.co/VN2M7Wn/heart.png" alt="heart" />
      </div>
    </div>
  );
}

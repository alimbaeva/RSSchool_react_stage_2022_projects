import React, { FC } from 'react';

export type CartType = {
  carts: {
    status: string;
    name: string;
    created: string;
    id: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: {
      name: string;
    };
    image: string;
  };
};

const Episods: FC<CartType> = (carts: CartType) => {
  return (
    <div id={String(carts.carts.id)} className="cart-item">
      <div className="cart-item__image">
        <img src={carts.carts.image} alt={carts.carts.name} />
      </div>
      <div className="cart-item__text">
        <h3>{carts.carts.name}</h3>
        <p>{carts.carts.gender}</p>
        <div className="cart-item__rating">
          <h5>Number Card: {carts.carts.id} </h5>
          <h5>Species: {carts.carts.species} </h5>
          <h5>Location: {carts.carts.location.name}</h5>
          <h5>Status: {carts.carts.status}</h5>
          <h5>Type: {carts.carts.type}</h5>
        </div>
      </div>
    </div>
  );
};

export default Episods;

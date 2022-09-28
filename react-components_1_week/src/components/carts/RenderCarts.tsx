import React from 'react';
import { Carts } from './Carts';
import { carts } from 'data/dataCart';

export function RenderCarts() {
  return (
    <div className="container">
      {carts.map((cart, id) => {
        return <Carts key={id} carts={cart} />;
      })}
    </div>
  );
}

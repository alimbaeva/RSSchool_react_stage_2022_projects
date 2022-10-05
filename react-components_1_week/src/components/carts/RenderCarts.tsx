import React, { ReactElement } from 'react';
import { Carts } from './Carts';
import { carts } from 'data/dataCart';

export function RenderCarts(): ReactElement {
  return (
    <div className="container">
      <div data-testid="main-page" className="carts-block">
        {carts.map((cart, id) => {
          return <Carts key={id} carts={cart} />;
        })}
      </div>
    </div>
  );
}

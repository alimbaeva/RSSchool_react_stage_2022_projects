import React, { ReactElement } from 'react';
import { CartsT } from 'Types';

interface CartsProps {
  carts: CartsT;
}

export function Carts(carts: CartsProps): ReactElement {
  return <img src={carts.carts.image} />;
}

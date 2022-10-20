import React from 'react';
import { carts } from 'components/pages/FormsData';
import CreatFormCart from './CreatFormCart';
import { IFormInput } from '../../Types';
import './creatFormCart.css';

export default class FormCarts extends React.Component {
  render() {
    if (carts.length !== 0) {
      return (
        <div data-testid="form-carts" className="form-carts">
          {carts.map((item: IFormInput, key: number) => {
            return <CreatFormCart card={item} key={key} />;
          })}
        </div>
      );
    }
  }
}

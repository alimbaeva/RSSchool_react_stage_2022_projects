import React from 'react';
import { carts } from 'components/pages/FormsData';
import CreatFormCart from './CreatFormCart';

export default class FormCarts extends React.Component {
  render() {
    if (carts.length !== 0) {
      return (
        <div className="form-carts">
          {carts.map((item, key) => {
            return <CreatFormCart card={item} key={key} />;
          })}
        </div>
      );
    }
  }
}

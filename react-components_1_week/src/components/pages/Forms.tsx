import FormCarts from 'components/formCarts/FormCarts';
import React from 'react';
import FormsData from './FormsData';
import './style/forms.css';

export default class Forms extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <h2>Forms</h2>
        <div className="form-cart-block">
          <FormsData />
          <FormCarts />
        </div>
      </div>
    );
  }
}

import React, { FC } from 'react';
import CreatFormCart from './CreatFormCart';
import { formCard } from '../reduser/reduserTypes';
import './creatFormCart.css';
import { createState, useAppSelectorForm } from 'components/redux/slice';

const FormCarts: FC = () => {
  const createCardForm = useAppSelectorForm(createState);

  if (createCardForm.cardForm.length !== 0) {
    return (
      <div data-testid="form-carts" className="form-carts">
        {createCardForm.cardForm?.map((item: formCard, key: number) => {
          return <CreatFormCart card={item} key={key} />;
        })}
      </div>
    );
  }
  return null;
};

export default FormCarts;

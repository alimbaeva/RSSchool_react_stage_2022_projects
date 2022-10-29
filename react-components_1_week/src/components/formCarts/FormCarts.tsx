import React, { useContext, FC } from 'react';
import CreatFormCart from './CreatFormCart';
import { UserContext } from '../context/UseContext';
import { formCard } from '../reduser/reduserTypes';
import './creatFormCart.css';

const FormCarts: FC = () => {
  const { state } = useContext(UserContext);
  console.log(state);
  console.log(state.formCard);
  console.log(state.formCard?.length);

  if (state.formCard?.length !== 0) {
    return (
      <div data-testid="form-carts" className="form-carts">
        {state.formCard?.map((item: formCard, key: number) => {
          return <CreatFormCart card={item} key={key} />;
        })}
      </div>
    );
  }
  return null;
};

export default FormCarts;

import React, { useReducer, useContext, FC } from 'react';
// import { carts } from 'components/pages/FormsData';
import CreatFormCart from './CreatFormCart';
import { IFormInput } from '../../Types';
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
// export default class FormCarts extends React.Component {
//   render() {
//     if (carts.length !== 0) {
//       return (
//         <div data-testid="form-carts" className="form-carts">
//           {carts.map((item: IFormInput, key: number) => {
//             return <CreatFormCart card={item} key={key} />;
//           })}
//         </div>
//       );
//     }
//   }
// }

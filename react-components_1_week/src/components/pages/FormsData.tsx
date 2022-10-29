import FormCarts from 'components/formCarts/FormCarts';
import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../../Types';
import { reducerSearch } from '../reduser/Reduser';
import {
  initialStateSearch,
  StateType,
  Action,
  ActionType,
  formCard,
} from '../reduser/reduserTypes';
import './style/forms.css';

// interface FormsType {
//   firstName: string;
//   lname: string;
//   dateDelivery: string;
//   myfile: string;
//   email: string;
//   sex: string;
//   errors: string;
// }

// const enum ActionType {
//   ADDFORMS = 'ADDFORMS',
// }

// interface StateType {
//   firstName: string;
//   lname: string;
//   dateDelivery: string;
//   myfile: string;
//   email: string;
//   sex: string;
//   errors?: string;
// }

// interface Action {
//   type: ActionType;
//   payload: {
//     firstName: string;
//     lname: string;
//     dateDelivery: string;
//     myfile: string;
//     email: string;
//     sex: string;
//     errors?: string;
//   };
// }

// const initialState: StateType = {
//   firstName: '',
//   lname: '',
//   dateDelivery: '',
//   myfile: '',
//   email: '',
//   sex: '',
//   errors: '',
// };

// const reducer: React.Reducer<StateType, Action> = (state, action) => {
//   switch (action.type) {
//     case ActionType.ADDFORMS:
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         dateDelivery: action.payload.dateDelivery,
//         myfile: action.payload.myfile,
//         sex: action.payload.sex,
//         email: action.payload.email,
//         errors: action.payload.errors,
//       };
//     default:
//       throw new Error();
//   }
// };

// export const carts: IFormInput[] = localStorage.getItem('carts')
//   ? JSON.parse(localStorage.getItem('carts')!)
//   : [];

const FormsData: FC = () => {
  const [key, setKey] = useState<number>(1);
  const [formsData, setFormsData] = useState<formCard[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const [state, dispatch] = React.useReducer<React.Reducer<StateType, Action>>(
    reducerSearch,
    initialStateSearch
  );

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const url = (data.myfile as unknown as FileList).item(0)?.name;
    const dataCard = {
      firstName: data.firstName,
      lname: data.lname,
      dateDelivery: data.dateDelivery,
      myfile: JSON.stringify(url).slice(1, -1),
      email: data.email,
      sex: data.sex,
      errors: data.errors,
    };
    // carts.push(dataCard);
    setFormsData([...formsData, dataCard]);

    // localStorage.setItem('carts', JSON.stringify(carts));
    Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
  };

  useEffect(() => {
    setKey(Math.random());
    dispatch({
      type: ActionType.ADDFORMS,
      payload: {
        formCard: [...formsData],
      },
    });
  }, [register, formsData]);

  console.log('state-dispach-form', state);

  return (
    <>
      <div>
        <div data-testid="forms-page" className="forms">
          <form data-testid="forms-names" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fname">
              First name:
              <input
                placeholder="name"
                type="text"
                data-testid="fname"
                {...register('firstName', { required: true })}
              />
              <div className="error-form">
                {errors.firstName?.type === 'required' && 'First name is required'}
              </div>
            </label>

            <label htmlFor="lname">
              Last name:
              <input
                placeholder="last name"
                type="text"
                data-testid="lname"
                {...register('lname', { required: true })}
              />
              <div className="error-form">
                {errors.lname?.type === 'required' && 'last name name is required'}
              </div>
            </label>

            <label htmlFor="dateDelivery">
              Date delivery:
              <input
                type="date"
                data-testid="date-delivery"
                {...register('dateDelivery', { required: true })}
              />
              <div className="error-form">
                {errors.dateDelivery?.type === 'required' && 'Date is required'}
              </div>
            </label>

            <label htmlFor="myfile">
              Select a file:
              <input type="file" data-testid="myfile" {...register('myfile', { required: true })} />
              <div className="error-form">
                {errors.myfile?.type === 'required' && 'file is required'}
              </div>
            </label>

            <label htmlFor="email">
              Enter your email:
              <input
                type="email"
                data-testid="email"
                {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              />
              <div className="error-form">
                {errors.email?.type === 'required' && 'email is required'}
              </div>
              <div className="error-form">
                {errors.email?.type === 'pattern' && 'email address entered incorrectly'}
              </div>
            </label>

            <div className="block-form_item">
              <label htmlFor="male">
                male
                <input type="radio" data-testid="male" {...register('sex')} value="male"></input>
              </label>

              <label htmlFor="female">
                female
                <input
                  type="radio"
                  data-testid="female"
                  {...register('sex')}
                  value="female"
                ></input>
              </label>
            </div>

            <div className="block-form_item">
              <button className="btn-form" type="submit" value="Submit" data-testid="submit">
                submit
              </button>
              <button className="btn-form" type="reset" data-testid="reset">
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <FormCarts key={key} />
    </>
  );
};

export default FormsData;

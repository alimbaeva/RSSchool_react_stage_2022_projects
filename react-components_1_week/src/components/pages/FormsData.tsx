import FormCarts from 'components/formCarts/FormCarts';
import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../../Types';
import './style/forms.css';

export const carts: IFormInput[] = localStorage.getItem('carts')
  ? JSON.parse(localStorage.getItem('carts')!)
  : [];

const FormsData: FC = () => {
  const [key, setKey] = useState<number>(1);
  // const [image, setImage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  // userEvent.upload(uploader, file);
  // Object.defineProperty(uploader, 'value', {
  //   value: file.name,
  // }

  // const onImageChange = (event: { target: { files: (Blob | MediaSource)[] } }) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const url = (data.myfile as unknown as FileList).item(0)?.name;
    console.log(url);
    const dataCard = {
      firstName: data.firstName,
      lname: data.lname,
      dateDelivery: data.dateDelivery,
      myfile: JSON.stringify(url).slice(1, -1),
      email: data.email,
      sex: data.sex,
      errors: data.errors,
    };
    carts.push(dataCard);
    localStorage.setItem('carts', JSON.stringify(carts));
    Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
  };

  useEffect(() => {
    setKey(Math.random());
  }, [register]);

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
              <button className="btn-form" type="submit" value="Submit">
                submit
              </button>
              <button className="btn-form" type="reset">
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

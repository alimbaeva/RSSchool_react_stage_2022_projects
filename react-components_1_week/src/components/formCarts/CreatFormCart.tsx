import React, { FC } from 'react';
// import { FormCart } from 'Types';

interface IFormInput {
  firstName: string;
  lname: string;
  dateDelivery: string;
  myfile: string;
  email: string;
  sex: string;
  errors: string;
}

interface formCard {
  card: IFormInput;
}

const CreatFormCart: FC<formCard> = (card: formCard) => {
  return (
    <div className="item" data-tesyid="form-vart-id">
      <h3>
        {card.card.firstName} {card.card.lname}
      </h3>
      <p>Date: {card.card.dateDelivery}</p>
      <p>Email: {card.card.email}</p>
      <p>Sex: {card.card.sex ? card.card.sex : 'unknown gender'}</p>
      <p>File: {card.card.myfile}</p>
    </div>
  );
};

export default CreatFormCart;

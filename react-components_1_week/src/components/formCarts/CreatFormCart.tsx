import React, { FC } from 'react';
import { IFormInput } from '../../Types';

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
      <p>File: {card.card.myfile?.name}</p>
    </div>
  );
};

export default CreatFormCart;

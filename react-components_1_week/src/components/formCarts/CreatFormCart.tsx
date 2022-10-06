import React from 'react';
import { FormCart } from 'Types';

export default function CreatFormCart(card: FormCart) {
  return (
    <div className="item" data-tesyid="form-vart-id">
      <h3>
        {card.card.name} {card.card.lastname}
      </h3>
      <p>Date: {card.card.date}</p>
      <p>Email: {card.card.email}</p>
      <p>Sex: {card.card.sex ? card.card.sex : 'unknown gender'}</p>
      <p>File: {card.card.file}</p>
    </div>
  );
}

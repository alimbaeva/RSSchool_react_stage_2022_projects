import { render, screen } from '@testing-library/react';
import React from 'react';
import { Carts } from './Carts';
import { carts } from 'data/dataCart';

describe('when render Carts', () => {
  it('should contain an expacted img', () => {
    render(<Carts carts={carts[0]} />);
    const basket = document.querySelector('.white-hart') as HTMLImageElement;
    expect(basket.alt).toContain('heart-love-wite3');

    const medal = document.querySelector('.medal') as HTMLImageElement;
    expect(medal.alt).toContain('medal');
  });

  it('should contain an expacted img', () => {
    render(<Carts carts={carts[0]} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
  });

  it('should contain an expacted Title h3', () => {
    render(<Carts carts={carts[0]} />);
    expect(
      screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    ).toBeInTheDocument();
  });
});

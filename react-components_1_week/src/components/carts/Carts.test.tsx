import { render, screen } from '@testing-library/react';
import React from 'react';
// import { carts } from 'data/dataCart';
import Carts from './Carts';
import { Character } from 'rickiMartyTypes';

describe('when render Carts', () => {
  const response: Character = {
    created: '2017-11-04T18:48:46.250Z',
    episode: ['51'],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    name: 'Rick Sanchez',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  };

  it('should contain an expacted img', async () => {
    render(<Carts carts={response} />);
    const basket = document.querySelector('.white-hart') as HTMLImageElement;
    expect(basket.alt).toContain('heart-love-wite3');

    const medal = document.querySelector('.medal') as HTMLImageElement;
    expect(medal.alt).toContain('medal');
  });

  it('should contain an expacted img', () => {
    render(<Carts carts={response} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain('https://rickandmortyapi.com');
  });

  it('should contain an expacted Title h3', () => {
    render(<Carts carts={response} />);
    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });
});

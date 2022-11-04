// import { render, screen, fireEvent } from '@testing-library/react';
// import React from 'react';
// import { Character } from 'rickiMartyTypes';
// import RenderCarts from './RenderCarts';
// import ModalcardRender from './ModalcardRender';

// describe('when render ModalcardRender', () => {
//   const response: Character = {
//     created: '2017-11-04T18:48:46.250Z',
//     episode: ['51'],
//     gender: 'Male',
//     id: 1,
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
//     name: 'Rick Sanchez',
//     origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
//     species: 'Human',
//     status: 'Alive',
//     type: '',
//     url: 'https://rickandmortyapi.com/api/character/1',
//   };
//   it('should contain an model card', async () => {
//     render(<RenderCarts value={''} />);
//     render(<ModalcardRender carts={response} />);
//     const mainPage = screen.getByTestId('main-page');
//     fireEvent.click(mainPage);

//     expect(screen.getByTestId('model-card')).toBeInTheDocument();
//   });

//   it('should contain an  model card text', async () => {
//     render(<RenderCarts value={''} />);
//     render(<ModalcardRender carts={response} />);
//     const mainPage = screen.getByTestId('main-page');
//     fireEvent.click(mainPage);
//     expect(screen.getByText(/location/i)).toBeInTheDocument();
//     expect(screen.getByText(/status/i)).toBeInTheDocument();
//   });
// });

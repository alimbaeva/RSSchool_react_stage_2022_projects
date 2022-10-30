import { render } from '@testing-library/react';
import React from 'react';
import FormCarts from './FormCarts';

describe('when render Forms file', () => {
  let response = {};
  beforeEach(() => {
    response = {
      data: [
        {
          date: '2022-10-07',
          email: 'asel.alimbaeva.kk@gmail.com',
          file: 'C:\\fakepath\\a.png',
          lastname: 'q',
          name: 'ssssss',
          sex: 'female',
        },
        {
          date: '2022-11-17',
          email: 'asel.alimbaeva.kk@gmail.com',
          file: 'C:\\fakepath\\a.png',
          lastname: 'qqqqq',
          name: 'aseliuy',
          sex: 'male',
        },
        {
          date: '2022-10-07',
          email: 'asel.alimbaeva.kk@gmail.com',
          file: 'C:\\fakepath\\a.png',
          lastname: 'ptitugh',
          name: 'dfdfhdjgjg',
          sex: 'female',
        },
      ],
    };
  });
  test('test map', async () => {
    render(<FormCarts />);
    const mockFn = jest.fn().mockReturnValue(response);
    mockFn();
    mockFn();
    mockFn();
    expect(mockFn).toBeCalledTimes(3);
  });
});

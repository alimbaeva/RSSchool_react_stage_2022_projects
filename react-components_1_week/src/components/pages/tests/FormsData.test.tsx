import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FormsData from '../FormsData';

describe('when render FormsData file', () => {
  test('Click Input fireEvent', async () => {
    render(<FormsData />);
    // const textInput = screen.getByTestId('fname');
    // expect(screen.getByTestId('forms-names')).toHaveFormValues({
    //   fname: 'jane',
    //   rememberMe: true,
    // });
  });
});

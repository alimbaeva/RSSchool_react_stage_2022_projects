import { render, screen } from '@testing-library/react';
import React from 'react';
import Forms from '../Forms';

describe('when render Forms file', () => {
  test('button block', () => {
    render(<Forms />);

    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
  test('male block', () => {
    render(<Forms />);

    expect(screen.getByTestId('male')).toBeInTheDocument();
  });
  test('forms block', () => {
    render(<Forms />);

    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });
});

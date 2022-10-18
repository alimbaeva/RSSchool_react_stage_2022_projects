import { render, screen } from '@testing-library/react';
import React from 'react';
import NoteFound from '../NoteFound';

describe('when render About', () => {
  test('input value is updated correctly', () => {
    render(<NoteFound />);

    expect(screen.getByText('Note Found')).toBeInTheDocument();
  });
});

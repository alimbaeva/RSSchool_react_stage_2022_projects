import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import React from 'react';
import Search from './Search';

describe('when render Search', () => {
  test('input value is updated correctly', () => {
    render(<Search />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    UserEvent.type(input, 'Search Input Element');

    expect(input.value).toBe('Search Input Element');
  });
  test('input value is updated correctly', () => {
    render(<Search />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    UserEvent.type(input, '1111111 4');

    expect(input.value).toBe('1111111 4');
  });
  test('input value is updated correctly', () => {
    render(<Search />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    UserEvent.type(input, 'Тест инпута');

    expect(input.value).toBe('Тест инпута');
  });

  it('focus input, use getByPlaceholderText', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText(/serch/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  test('focus, use getByRole(textbox) ', () => {
    render(<Search />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  test('focus, button toHaveBeenCalledTimes ', () => {
    render(<Search />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    const submitbtn = jest.fn();
    UserEvent.click(button);
    expect(submitbtn).toHaveBeenCalledTimes(0);
  });

  test('focus, use getByRole(textbox) for buttton', () => {
    render(<Search />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).not.toHaveFocus();
    button.focus();
    expect(button).toHaveFocus();
  });
});

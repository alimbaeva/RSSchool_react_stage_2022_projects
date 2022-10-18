import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Test Router App', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const formsLink = screen.getByText(/forms/i);
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();

    userEvent.click(formsLink);
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });
  test('Router test Error', () => {
    render(
      <MemoryRouter initialEntries={['/wrongPage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Note Found/i)).toBeInTheDocument();
  });
});

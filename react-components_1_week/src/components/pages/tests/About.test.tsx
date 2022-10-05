import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../About';

describe('when render About', () => {
  test('input value is updated correctly', () => {
    render(<About />);

    expect(screen.getByText('О нас')).toBeInTheDocument();
  });
  test('input value is updated correctly', () => {
    render(<About />);
    const text =
      'Добавить React-Router версии 6. Добавьте заголовок, который показывает текущую страницу. Также добавьте страницы “О нас”, “404”. Если пользователь введет неизвестный маршрут в URL–приложение должно перенаправить на “404”.';
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

import React from 'react';
import './style/about.css';

export default class About extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="about">
          <h1>О нас</h1>
          <p>
            Добавить React-Router версии 6. Добавьте заголовок, который показывает текущую страницу.
            Также добавьте страницы “О нас”, “404”. Если пользователь введет неизвестный маршрут в
            URL–приложение должно перенаправить на “404”.
          </p>
        </div>
      </div>
    );
  }
}

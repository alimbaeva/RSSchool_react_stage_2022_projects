import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const menuItems = [
  {
    id: 1,
    menu: 'home',
    link: '/',
  },
  {
    id: 2,
    menu: 'about',
    link: 'about',
  },
  {
    id: 3,
    menu: 'forms',
    link: 'forms',
  },
];

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          {menuItems.map((menu) => {
            return (
              <NavLink className="link" key={menu.id} to={menu.link}>
                {menu.menu}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

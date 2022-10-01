import React from 'react';
import { NavLink } from 'react-router-dom';
// import './search.css';

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
];

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        {menuItems.map((menu) => {
          return (
            <NavLink key={menu.id} to={menu.link}>
              {menu.menu}
            </NavLink>
          );
        })}
      </div>
    );
  }
}

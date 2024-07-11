import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Brand</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/vehiculos">Vehículos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/electronica">Electrónica</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/moda">Moda</Link>
          </li>
        </ul>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;

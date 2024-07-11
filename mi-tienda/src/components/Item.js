import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={`https://via.placeholder.com/200?text=${product.name}`} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;

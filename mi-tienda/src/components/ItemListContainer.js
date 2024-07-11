import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/async-mocks';
import Item from './Item';

function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(id).then(setProducts);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

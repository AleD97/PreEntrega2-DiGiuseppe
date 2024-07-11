const products = [
    { id: '1', category: 'vehiculos', name: 'Auto', price: '10000', description: 'Un auto rápido' },
    { id: '2', category: 'electronica', name: 'Televisor', price: '500', description: 'Un televisor grande' },
    { id: '3', category: 'moda', name: 'Camiseta', price: '20', description: 'Una camiseta bonita' },
  ];
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          resolve(products.filter(product => product.category === category));
        } else {
          resolve(products);
        }
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === id));
      }, 1000);
    });
  };
  
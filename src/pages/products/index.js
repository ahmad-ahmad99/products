import React from 'react';

const ProductsPage = React.lazy(() => import('./ProductsPage'));

export const productsPagesConfigs = [
  {
    path: '/products',
    element: <ProductsPage />,
  },
];

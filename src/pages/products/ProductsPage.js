import {Table} from 'antd';
import React from 'react';
import {useGitListService} from 'services';
import {Products_URL} from 'services/appUrls';

import {ProductsColumns} from './ProductsColumns';

export default function ProductsPage() {
  const {data: productsList, isFetching} = useGitListService(Products_URL);
  console.log('products');
  console.log(productsList);
  console.log('products');
  const columns = ProductsColumns();
  console.log(productsList);

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={productsList?.products}
      />
    </div>
  );
}

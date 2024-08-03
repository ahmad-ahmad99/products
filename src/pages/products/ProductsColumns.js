import {Tag} from 'antd';

export const ProductsColumns = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Sku',
      dataIndex: 'sku',
      key: 'sku',
    },

    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, {tags}) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  return columns;
};

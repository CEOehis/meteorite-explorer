import React from 'react';

import { Table } from 'antd';

const columns = [
  // { title: 'Fall', dataIndex: 'fall' },
  // { title: 'Geolocation', dataIndex: 'geolocation' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Id', dataIndex: 'id' },
  { title: 'Nametype', dataIndex: 'nametype' },
  { title: 'Rec class', dataIndex: 'recclass' },
  { title: 'Mass(g)', dataIndex: 'mass' },
  { title: 'Latitude', dataIndex: 'reclat' },
  { title: 'Longitude', dataIndex: 'reclong' },
  { title: 'Year', dataIndex: 'year' },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default ({ dataSource }) => (
  <Table
    onRow={record => {
      // eslint-disable-next-line no-param-reassign
      record.year = new Date(record.year).getFullYear();
    }}
    columns={columns}
    rowKey="id"
    dataSource={dataSource}
    onChange={onChange}
  />
);

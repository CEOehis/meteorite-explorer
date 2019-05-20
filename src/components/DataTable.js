import React from 'react';

import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Id', dataIndex: 'id' },
  { title: 'Nametype', dataIndex: 'nametype' },
  { title: 'Rec class', dataIndex: 'recclass' },
  { title: 'Mass(g)', dataIndex: 'mass' },
  { title: 'Fall', dataIndex: 'fall' },
  { title: 'Year', dataIndex: 'year' },
  { title: 'Latitude', dataIndex: 'reclat' },
  { title: 'Longitude', dataIndex: 'reclong' },
];

export default props => (
  <Table
    onRow={record => {
      // eslint-disable-next-line no-param-reassign
      record.year = record.year ? new Date(record.year).getFullYear() : '';
    }}
    columns={columns}
    rowKey="id"
    {...props}
  />
);

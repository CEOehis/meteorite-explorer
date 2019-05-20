import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default () => (
  <Search
    placeholder="Enter search terms"
    style={{
      width: 300,
      marginBottom: 30,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    size="large"
    onSearch={value => console.log(value)}
  />
);

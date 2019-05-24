import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default props => (
  <Search
    placeholder="Enter search terms"
    enterButton="Search"
    style={{
      width: 300,
      marginBottom: 30,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    size="large"
    {...props}
  />
);

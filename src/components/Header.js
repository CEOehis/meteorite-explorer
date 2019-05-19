import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export default () => (
  <Header>
    <div className="logo">
      <h1>
        <a href="/">Meteorite explorer</a>
      </h1>
    </div>
  </Header>
);

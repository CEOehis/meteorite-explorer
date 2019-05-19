import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default () => (
  <Footer style={{ textAlign: 'center' }}>
    built with{' '}
    <span role="img" aria-label="love">
      ❤️
    </span>
    by Celestine
  </Footer>
);

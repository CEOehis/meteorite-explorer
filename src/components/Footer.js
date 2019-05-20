import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default () => (
  <Footer style={{ textAlign: 'center' }}>
    View{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/CEOehis/meteorite-explorer"
    >
      page source
    </a>
  </Footer>
);

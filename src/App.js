import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const { Content } = Layout;

class App extends Component {
  state = {};

  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Contents
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;

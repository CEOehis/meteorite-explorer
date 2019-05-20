import React, { Component } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import './App.css';

const { Content } = Layout;

class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://data.nasa.gov/api/id/gh4g-9sfh.json?&$limit=10&$offset=0'
    );
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div>
              <SearchBar />
            </div>
            <DataTable dataSource={data} />
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;

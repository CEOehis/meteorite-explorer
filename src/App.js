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
    loading: false,
    error: '',
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    try {
      const { data } = await axios.get(
        'https://data.nasa.gov/api/id/gh4g-9sfh.json?'
      );
      this.setState({
        data,
        loading: false,
      });
    } catch (e) {
      this.setState({
        error: 'Encountered error while fetching, try reloading this page',
        loading: false,
      });
    }
  }

  onSearchChange = event => {
    if (event.target.value === '') {
      return window.history.pushState({}, null, '/');
    }
    return window.history.pushState({}, null, `search?q=${event.target.value}`);
  };

  onSearch = async () => {
    const name = encodeURIComponent(`%${window.location.search.slice(3)}%`);
    this.setState({
      loading: true,
    });
    try {
      const { data } = await axios.get(
        `https://data.nasa.gov/api/id/gh4g-9sfh.json?$where=lower(name) like lower("${name}")`
      );
      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Encountered error while fetching, try reloading this page',
        loading: false,
      });
    }
  };

  render() {
    const { data, loading, error } = this.state;
    return (
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div>
              <SearchBar
                onSearch={this.onSearch}
                onChange={this.onSearchChange}
              />
            </div>
            {error ? (
              <div style={{ textAlign: 'center' }}>
                <p>{error}</p>
              </div>
            ) : (
              <DataTable dataSource={data} loading={loading} />
            )}
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;

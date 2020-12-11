import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { create } from 'apisauce';
import ItemList from './components/itemList/itemList';
import NoData from './components/NoData/NoData'
import Header from './components/Header/Header'
import './App.css';

const { Content } = Layout;

// const onSearch = value => console.log(value);
const api = create({
  baseURL: 'https://itunes.apple.com/'
})

function App() {

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loadStatus, setLoadStatus] = useState('beforeLoad');

  const handleSearch = (e) => {
    setSearchText(e);
  }

  useEffect(() => {
    if(searchText){
      async function fetchData() {
          api.get(
            `/search?term=${searchText}&media=music`
        ).then(response => setData(response.data.results));
        setLoadStatus('loaded');
      }
      setLoadStatus('loading');

      fetchData().catch((error) => {
        console.log("Error: ", error);
      });
    }
  }, [searchText])

  return (
    <div className={`container${data.length > 0 ? ' container-auto' : ''}`}>

        {loadStatus === 'beforeLoad' && <h1 className="welcome-text">Welcome to itunes</h1>}
        <Header loadStatus={loadStatus} handleSearch={handleSearch} />
          <Content
            className="site-layout-background"
            style={{
              padding: "100px 40px 0px 40px",
            }}
          >
            {loadStatus === 'loading' && <h1>Loading...</h1>}
            {((loadStatus === 'loaded' && data.length > 0) || loadStatus === 'beforeLoad') ? <ItemList data={data} /> : <NoData style={{height:"100vh"}} searchText={searchText} />}
          </Content>

    </div>
  );
}

export default App;




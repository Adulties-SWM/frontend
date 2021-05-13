import { MedInfoModal } from './components/MedInfoModal';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Sidebar } from './components/Sidebar';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { useEffect, useState } from 'react';
import Map from './components/Map/Map';
import './App.css';

function App() {
  const [markerList, setMarkerList] = useState([
    {
      title: '카카오',
      content: '<div>카카오</div>',
      lat: 33.450705,
      lon: 126.570677,
    },
    {
      title: '생태연못',
      content: '<div>생태연못</div>',
      lat: 33.450936,
      lon: 126.569477,
    },
    {
      title: '텃밭',
      content: '<div>텃밭</div>',
      lat: 33.450879,
      lon: 126.56994,
    },
    {
      title: '근린공원',
      content: '<div>근린공원</div>',
      lat: 33.451393,
      lon: 126.570738,
    },
  ]);
  useEffect(() => {
    //console.log(markerList);
  }, [markerList]);
  return (
    <>
      <Layout>
        <Sider style={{ background: '#ffffff' }} width={400}>
          <Sidebar />
        </Sider>
        <Content>content map</Content>
      </Layout>
      <Map markerList={markerList}></Map>
      {/* <MedInfoModal modalProps={{ visible: false }} /> */}
    </>
  );
}

export default App;

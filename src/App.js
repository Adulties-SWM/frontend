import React, { useState, useEffect, useCallback } from 'react';
import { MedInfoModal } from './components/MedInfoModal';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Sidebar } from './components/Sidebar';
import Layout from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Map from './components/Map/Map';
import './App.css';
import { getCurLocMedicals, getSigungu } from './api/medicalAPI';

function App() {
  const [currentTab, setCurrentTab] = useState('1');
  const [currentAvailable, setCurrentAvailable] = useState('open');
  const [disease, setDisease] = useState(null);
  const [maxDistance, setMaxDistance] = useState(null);
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
  const [medicals, setMedicals] = useState([]);
  const changeMarkerList = list => {
    setMarkerList(list);
    console.log(list);
  };
  useEffect(() => {
    if (currentTab != 1) return;
    navigator.geolocation.getCurrentPosition(position => {
      getCurLocMedicals({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        currentAvailable,
        maxDistance,
        disease,
      }).then(({ hospitals }) => {
        setMedicals(hospitals);
        setMarkerList(
          hospitals.map(hospital => ({
            title: hospital.name,
            content: `<div>${hospital.name}</div>`,
            lat: Number(hospital.lat),
            lon: Number(hospital.lon),
            hpid: hospital.hpid,
          })),
        );
      });
    });
  }, [currentTab, currentAvailable, maxDistance, disease]);

  useEffect(() => {
    if (currentTab != 2) return;
    //TODO: Sigungu?
  }, [currentTab, currentAvailable, maxDistance, disease]);

  return (
    <>
      <Layout>
        <Sider style={{ background: '#ffffff' }} width={400}>
          <Sidebar
            currentAvailable={currentAvailable}
            setCurrentAvailable={setCurrentAvailable}
            disease={disease}
            setDisease={setDisease}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
            changeMarkerList={changeMarkerList}
            medicals={medicals}
            setCurrentTab={setCurrentTab}
          />
        </Sider>
        <Map markerList={markerList}></Map>
      </Layout>
    </>
  );
}

export default App;

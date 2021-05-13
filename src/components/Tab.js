import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Tabs } from 'antd';
import SurgeryHours from './SurgeryHours';
import PatientState from './PatientState';
import Distance from './Distance';
import Search from './Search';

const { TabPane } = Tabs;
const TabWrap = styled.div`
  width: 400px;
  height: 230px;
  padding: 5px 20px;
  background-color: #668aab;
  float: left;
`;
const StyledTab = styled(Tabs)`
  .ant-tabs-nav-wrap .ant-tabs-nav-wrap {
    padding-left: 80px !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff !important;
    font-weight: 500;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: #ffffff;
    pointer-events: none;
  }
`;
const StyledA = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;
const Tab = ({
  currentAvailable,
  setCurrentAvailable,
  disease,
  setDisease,
  maxDistance,
  setMaxDistance,
}) => {
  const handleChange = key => {};
  return (
    <TabWrap>
      <StyledTab
        defaultActiveKey="1"
        onChange={handleChange}
        tabBarStyle={{ color: '#ffffff' }}
      >
        <TabPane tab="현재 위치" key="1">
          <StyledA>거리</StyledA>
          <Distance maxDistance={maxDistance} setMaxDistance={setMaxDistance} />
          <SurgeryHours
            currentAvailable={currentAvailable}
            setCurrentAvailable={setCurrentAvailable}
          />
          <PatientState disease={disease} setDisease={setDisease} />
        </TabPane>
        <TabPane tab="장소 검색" key="2">
          <StyledA>장소</StyledA>
          <Search />
          <SurgeryHours
            currentAvailable={currentAvailable}
            setCurrentAvailable={setCurrentAvailable}
          />
          <PatientState disease={disease} setDisease={setDisease} />
        </TabPane>
      </StyledTab>
    </TabWrap>
  );
};

export default Tab;

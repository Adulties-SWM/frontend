import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import styled from 'styled-components';
const StyledDiv = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const SurgeryHoursWrap = styled.a`
  float: left;
  margin-top: 5px;
`;
const options = [
  { label: '현재진료가능', value: 'now' },
  { label: '전체', value: 'all' },
];
const SurgeryHours = () => {
  const [value, setValue] = useState('now');
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <SurgeryHoursWrap>
      <StyledDiv>진료 시간</StyledDiv>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
        style={{ fontSize: '12px' }}
      />
    </SurgeryHoursWrap>
  );
};

export default SurgeryHours;

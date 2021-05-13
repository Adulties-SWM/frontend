import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;
const StyledSelect = styled(Select)`
  width: 150px;
`;
const StyledDiv = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const SurgeryHoursWrap = styled.a`
  float: left;
  margin-left: 10px;
  margin-top: 5px;
`;
const PatientState = () => {
  const [list, setList] = useState(['타박상', '뇌출혈 수술']);
  const handleChange = value => {};
  return (
    <SurgeryHoursWrap>
      <StyledDiv>진단 항목</StyledDiv>
      <StyledSelect onChange={handleChange} placeholder={'진단 항목 선택'}>
        {list.map(item => (
          <Option value={item}>{item}</Option>
        ))}
      </StyledSelect>
    </SurgeryHoursWrap>
  );
};

export default PatientState;

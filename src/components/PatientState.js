import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;
const StyledSelect = styled(Select)`
  width: 170px;
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
const PatientState = ({ disease, setDisease }) => {
  const options = [
    '응급실',
    '뇌출혈수술',
    '뇌경색의재관류',
    '심근경색의재관류',
    '복부손상의수술',
    '사지접합의수술',
    '응급내시경',
    '응급투석',
    '조산산모',
    '정신질환자',
    '신생아',
    '중증화상',
  ];
  const handleChange = value => {
    setDisease(value);
  };
  return (
    <SurgeryHoursWrap>
      <StyledDiv>진단 항목</StyledDiv>
      <StyledSelect onChange={handleChange} placeholder={'진단 항목 선택'}>
        {options.map(item => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </StyledSelect>
    </SurgeryHoursWrap>
  );
};
export default PatientState;

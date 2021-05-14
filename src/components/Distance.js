import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import styled from 'styled-components';
const { Option } = Select;
const StyledSelect = styled(Select)`
  width: 120px;
`;
const DistanceWrap = styled.div`
  margin: 5px 0px;
`;
const Distance = ({ maxDistance, setMaxDistance }) => {
  const options = [1, 3, 5, 10, 20, null];
  const handleChange = value => {
    setMaxDistance(value*1000);
  };
  return (
    <DistanceWrap>
      <StyledSelect onChange={handleChange} placeholder={'거리 선택'}>
        {options.map(item => (
          <Option key={item} value={item}>
            {item ? `${item}km` : '제한없음'}
          </Option>
        ))}
      </StyledSelect>
    </DistanceWrap>
  );
};

export default Distance;

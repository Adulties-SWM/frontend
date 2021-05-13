import React, { useState } from 'react';
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
const Distance = () => {
  const [list, setList] = useState([300, 500]);
  const handleChange = value => {};
  return (
    <DistanceWrap>
      <StyledSelect onChange={handleChange} placeholder={'거리 선택'}>
        {list.map(item => (
          <Option value={item}>{item}m</Option>
        ))}
      </StyledSelect>
    </DistanceWrap>
  );
};

export default Distance;

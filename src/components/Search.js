import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

const Search = () => {
  const [list, setList] = useState([300, 500]);
  const handleChange = value => {};
  return (
    <>
      <Select style={{ width: 120 }} onChange={handleChange} placeholder={'거리 선택'}>
        {list.map(item => (
          <Option value={item}>{item}m</Option>
        ))}
      </Select>
    </>
  );
};

export default Search;

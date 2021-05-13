import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;
const SearchWrap = styled.div`
  margin: 5px 0px;
`;
const SearchComponent = () => {
  const onSearch = value => console.log(value);
  return (
    <SearchWrap>
      <Search placeholder="위치 입력" onSearch={onSearch} enterButton style={{width: '335px'}}/>
    </SearchWrap>
  );
};

export default SearchComponent;

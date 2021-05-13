import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';
import { getLocation } from '../api/kakaoAPI';
import { getSigungu } from '../api/medicalAPI';

const { Search } = Input;
const SearchWrap = styled.div`
  margin: 5px 0px;
`;
const SearchComponent = () => {
  const onSearch = async value => {
    const result_public = await getLocation(value);
    const addressList = result_public.split(' ');
    if (addressList.length < 2) {
      // 올바르지 않은 주소 입력 --> 재입력 알람 보내기
    } else {
      // 올바른 주소 입력 --> 서버로 데이터 보내기
      const sido = addressList[0];
      const sigugun = addressList[1];
      // const result_node = await getSigungu(sido, sigungu);
    }
  };
  return (
    <SearchWrap>
      <Search
        placeholder="위치 입력"
        onSearch={onSearch}
        enterButton
        style={{ width: '335px' }}
      />
    </SearchWrap>
  );
};

export default SearchComponent;

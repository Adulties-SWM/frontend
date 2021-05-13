import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, AutoComplete } from 'antd';
import styled from 'styled-components';
import { getLocation } from '../api/kakaoAPI';
import { getSigungu } from '../api/medicalAPI';

const { Search } = Input;
const SearchWrap = styled.div`
  margin: 5px 0px;
`;
const SearchComponent = ({ currentAvailable, disease, changeMarkerList }) => {
  const [options, setOptions] = useState([]);
  const handleSearch = value => {
    setOptions(value);
  };
  const onSearch = async value => {
    if (value.length > 0) {
      var result_public = await getLocation(value);
      if (result_public.length > 0) {
        const addressList = result_public[0].address_name.split(' ');
        if (addressList.length < 2) {
          // 올바르지 않은 주소 입력 --> 재입력 알람 보내기
        } else {
          // 올바른 주소 입력 --> 서버로 데이터 보내기
          const sido = addressList[0];
          const sigungu = addressList[1];
          console.log(sido);
          console.log(sigungu);
          console.log(currentAvailable);
          console.log(disease);
          const result_node = await getSigungu(
            sido,
            sigungu,
            currentAvailable,
            disease,
          );
          if (result_node.length > 0) changeMarkerList(result_node);
        }
      }
    }
  };
  const onChangeHandle = async e => {
    const result_public = await getLocation(e.target.value);
    var tmp = [];
    if (result_public.length > 0) {
      result_public.map(info => {
        tmp.push(info.address_name);
      });
    }
    handleSearch(tmp);
    console.log(tmp);
  };
  return (
    <SearchWrap>
      <Search
        placeholder="위치 입력"
        onSearch={onSearch}
        onChange={onChangeHandle}
        enterButton
        style={{ width: '357px' }}
      />
    </SearchWrap>
  );
};

export default SearchComponent;

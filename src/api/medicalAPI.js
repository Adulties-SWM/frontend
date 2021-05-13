import axios from 'axios';
const url = 'https://backend-exvxj.run.goorm.io';
//axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const getSigungu = async (sido, sigungu, currentAvailable, disease) => {
  try {
    // sido / sigungu 정보 써서 서버로 쏘면 됨
    const { data } = await axios.get(
      `${url}/info/city?sido=${sido}&sigungu=${sigungu}&currentAvailable=${currentAvailable}&disease=${disease}`,
    );
    console.log('[SUCCESS] GET SIGUNGU', data.hospitals);
    return data.hospitals;
  } catch (e) {
    console.error('[FAIL] GET SIGUNGU', e);
    return e;
  }
};
//axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const getDetail = async hpid => {
  try {
    const { data } = await axios.get(`${url}/detail?hpid=${hpid}`);
    console.log('[SUCCESS] GET DETAIL', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET DETAIL', e);
    return e;
  }
};

export const getCurLocMedicals = async params => {
  try {
    const ret = await axios.get(`${url}/info/position`, { params });
    const { data } = ret;
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

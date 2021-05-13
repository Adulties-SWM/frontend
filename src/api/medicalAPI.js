import axios from 'axios';
const url = 'https://backend-exvxj.run.goorm.io';
//const url = 'https://backend-vrbkm.run.goorm.io';

const getSigungu = async (sido, sigungu, currentAvailable, disease) => {
  try {
    // sido / sigungu 정보 써서 서버로 쏘면 됨
    const { data } = await axios.get(
      `${url}/info/city?sido=${sido}&sigungu=${sigungu}&currentAvailable=${currentAvailable}&disease=${disease}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    console.log('[SUCCESS] GET SIGUNGU', data);
    return data.hospitals;
  } catch (e) {
    console.error('[FAIL] GET SIGUNGU', e);
    return e;
  }
};
export { getSigungu };

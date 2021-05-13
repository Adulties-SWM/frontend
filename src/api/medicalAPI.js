import axios from 'axios';
const url = 'https://backend-exvxj.run.goorm.io/';

const getSigungu = async (sido, sigungu) => {
  try {
    // sido / sigungu 정보 써서 서버로 쏘면 됨
    const { data } = await axios.get(`${url}/info/city`);
    console.log('[SUCCESS] GET SIGUNGU', data);
    return data.documents[0].address_name;
  } catch (e) {
    console.error('[FAIL] GET SIGUNGU', e);
    return e;
  }
};
export { getSigungu };

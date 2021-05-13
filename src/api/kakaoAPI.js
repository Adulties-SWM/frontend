import axios from 'axios';
import { config } from '../config/kakao';
const url = 'http://dapi.kakao.com';

const getLocation = async address => {
  try {
    const { data } = await axios.get(
      `${url}/v2/local/search/address.json?query=${address}`,
      {
        headers: { Authorization: `KakaoAK ${config.REST_API_KEY}` },
      },
    );
    console.log('[SUCCESS] GET LOCATION', data);
    console.log(data.documents);
    return data.documents;
  } catch (e) {
    console.error('[FAIL] GET LOCATION', e);
    return e;
  }
};
export { getLocation };

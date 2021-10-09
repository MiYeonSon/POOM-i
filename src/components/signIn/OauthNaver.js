const CLIENT_ID = '0FQJffN_uHzzsY1khFme';
const REDIRECT_URI = 'http://localhost:3000/signup/oauth/naver';

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
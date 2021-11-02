const CLIENT_ID = "ee644a1eeb8e2a1d7f52117f54870bd9";
const REDIRECT_URI = "http://localhost:3000/signup/oauth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

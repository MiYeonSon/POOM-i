import axios from "axios";

const kakaoLogin = (code) => {
    return function (dispatch, getState) {
        axios.get(`http://poom-i.kro.kr:8081/api/oauth2/kakao?code=${code}`)
            .then(res => {
                console.log(res); // 토큰이 넘어올 것임

                const ACCESS_TOKEN = res.data.accessToken;
                localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함
                window.alert("로그인에 성공 하였습니다.");
            })
            .catch((err) => {
                console.log("소셜로그인 에러", err);
                window.alert("로그인에 실패하였습니다.");
            })
    }
};

const actionCreators = {kakaoLogin};

export {actionCreators};
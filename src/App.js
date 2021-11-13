import "./App.css";
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage.js";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import FindChildcarePage from "./pages/funtional-page/FindChildcarePage";
import FindClassPage from "./pages/funtional-page/FindClassPage";
import KakaoOauthRedirectHandler from "./components/routing-page/login/KakaoOauthRedirectHandler";
import GoogleOauthRedirectHandler from "./components/routing-page/login/GoogleOauthRedirectHandler";
import NaverOauthRedirectHandler from "./components/routing-page/login/NaverOauthRedirectHandler";
import FindPlacePage from "./pages/funtional-page/FindPlacePage";
import RegisterPlacePage from "./pages/playground/register/RegisterPlacePage";
import MyPage from "./pages/mypage/MyPage";
import MyPageActivity from "./pages/mypage/MyPageActivity";
import MyPageSpaceForm from "./pages/mypage/MyPageSpaceForm";
import MyPageMember from "./pages/mypage/MyPageMember";
import VotePage from "./pages/VotePage";

function App() {
    return (
        <>
            <Route path={"/"} component={MainPage} exact={true} />
            <Route path={"/login"} component={SignInPage} exact={true}/>
            <Route path={"/register"} component={SignUpPage} exact={true}/>
            <Route path={"/signup/oauth/google"} component={GoogleOauthRedirectHandler} exact={true}/>
            <Route path={"/signup/oauth/naver"} component={NaverOauthRedirectHandler} exact={true}/>
            <Route path={"/signup/oauth/kakao"} component={KakaoOauthRedirectHandler} exact={true}/>

            <Route path={"/mypage"} component={MyPage} exact={true}/>
            <Route path={"/mypage/manageactivity"} component={MyPageActivity} exact={true}/>
            <Route path={"/mypage/manageform"} component={MyPageSpaceForm} exact={true}/>
            <Route path={'/mypage/managemember'} component={MyPageMember} exact={true}/>

            <Route path={"/childcare"} component={FindChildcarePage} exact={true}/>
            <Route path={"/class"} component={FindClassPage} exact={true}/>
            <Route path={"/playground"} component={FindPlacePage} exact={true}/>
            <Route path={"/playground/register"} component={RegisterPlacePage} exact={true}/>

            <Route path={"/realvote/:voteId"} component={VotePage}/>
        </>
    );
}

export default App;
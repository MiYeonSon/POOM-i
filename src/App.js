import "./App.css";
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage.js";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import FindChildcarePage from "./pages/FindChildcarePage";
import FindClassPage from "./pages/FindClassPage";
import KakaoOauthRedirectHandler from "./components/routing-page/login/KakaoOauthRedirectHandler";
import GoogleOauthRedirectHandler from "./components/routing-page/login/GoogleOauthRedirectHandler";
import NaverOauthRedirectHandler from "./components/routing-page/login/NaverOauthRedirectHandler";
import FindPlacePage from "./pages/FindPlacePage";
import RegisterPlacePage from "./pages/RegisterPlacePage";
import MyPage from "./components/routing-page/mypage/MyPage";

function App() {
    return (
        <>
            <Route path={"/"} component={MainPage} exact={true}/>
            <Route path={"/login"} component={SignInPage} exact={true} />
            <Route path={"/register"} component={SignUpPage} exact={true}/>
            <Route path={"/signup/oauth/google"} component={GoogleOauthRedirectHandler} exact={true} />
            <Route path={"/signup/oauth/naver"} component={NaverOauthRedirectHandler} exact={true} />
            <Route path={"/signup/oauth/kakao"} component={KakaoOauthRedirectHandler} exact={true}/>
            <Route path={"/mypage"} component={MyPage} exact={true} />


            <Route path={"/childcare"} component={FindChildcarePage} exact={true}/>
            <Route path={"/class"} component={FindClassPage} exact={true}/>
            <Route path={"/playground"} component={FindPlacePage} exact={true} />
            <Route path={"/playground/register"} component={RegisterPlacePage} exact={true} />
        </>
    );
}

export default App;
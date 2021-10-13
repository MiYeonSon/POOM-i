import "./App.css";
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage.js";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import FindRearingPage from "./pages/FindRearingPage";
import RegularTermPage from "./pages/RegularTermPage";
import KakaoOauthRedirectHandler from "./components/signIn/KakaoOauthRedirectHandler";
import GoogleOauthRedirectHandler from "./components/signIn/GoogleOauthRedirectHandler";
import NaverOauthRedirectHandler from "./components/signIn/NaverOauthRedirectHandler";
import PoomPlacePage from "./pages/PoomPlacePage";
import RegisterPoomPlacePage from "./pages/RegisterPoomPlacePage";

function App() {
    return (
        <>
            <Route path={"/"} component={MainPage} exact={true}/>
            <Route path={"/signIn"} component={SignInPage} exact={true} />
            <Route path={"/signUp"} component={SignUpPage} exact={true}/>
            <Route path={"/signup/oauth/google"} component={GoogleOauthRedirectHandler} exact={true} />
            <Route path={"/signup/oauth/naver"} component={NaverOauthRedirectHandler} exact={true} />
            <Route path={"/signup/oauth/kakao"} component={KakaoOauthRedirectHandler} exact={true}/>
            <Route path={"/expert"} component={FindRearingPage} exact={true}/>
            <Route path={"/expert/regularTerm"} component={RegularTermPage} exact={true}/>
            <Route path={"/playground"} component={PoomPlacePage} exact={true}/>
            <Route path={"/playground/registerplace"} component={RegisterPoomPlacePage} exact={true} />
        </>
    );
}

export default App;
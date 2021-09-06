import "./App.css";
import {Route} from 'react-router-dom';
import MainPage from "./pages/MainPage.js";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import FindRearingPage from "./pages/FindRearingPage";
import RegularTermPage from "./pages/RegularTermPage";
import OauthRedirectHandler from "./components/signIn/OauthRedirectHandler";

function App() {
    return (
        <>
            <Route path={"/"} component={MainPage} exact={true}/>
            <Route path={"/signIn"} component={SignInPage} exact={true} />
            <Route path={"/signUp"} component={SignUpPage} exact={true}/>
            <Route path={"/signup/oauth/kakao"} component={SignUpPage} />
            <Route path={"/findRearing/shortTerm"} component={FindRearingPage} exact={true}/>
            <Route path={"/findRearing/regularTerm"} component={RegularTermPage} exact={true}/>

        </>
    );
}

export default App;
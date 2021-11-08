import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, login} from "../../modules/auth";
import LoginForm from "../../components/routing-page/login/LoginForm";
import {withRouter} from "react-router-dom";
import {setToken, setUser} from "../../modules/user";

const ContainerLoginForm = ({match, history}) => {
    // useDispatch와 useSelector 함수를 사용하여 컴포넌트를 리덕스와 연동시킨다.
    const dispatch = useDispatch();

    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'login',
            key: name,
            value
        }))
    }

    const onSubmit = e => {
        e.preventDefault();
        const {email, password} = form;
        dispatch(login({email, password}));
    }

    /*
     *  - 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
     *  - 클래스형 컴포넌트의 `componentDidMount`와 `componentDidUpdate`를 합친 형태로 보아도 무방하다. → **DOM 관련 처리 가능하다.**
     */
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log(authError);
        }

        if (auth) {
            localStorage.setItem('user', JSON.stringify(auth.data));
            localStorage.setItem('token', JSON.stringify(auth.token_info.access_token));
            dispatch(setUser(auth.data));
            dispatch(setToken(auth.token_info.access_token));
        }
    }, [auth, authError]);

    useEffect(() => {
        if (user) {
            console.log('user exist');
            try {
                console.log(user);
            } catch (e) {
                console.log('localstorage is not working');
            }
        }
    }, [history, user]);


    return (
        <LoginForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(ContainerLoginForm);

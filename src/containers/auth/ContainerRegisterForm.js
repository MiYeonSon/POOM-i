import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, register} from "../../modules/auth";
import SignUpStep3 from "../../components/routing-page/register/step03/SignUpStep3";

const ContainerRegisterForm = () => {
    const dispatch = useDispatch();
    const {form, auth, authError, user}  = useSelector(({auth, user}) =>({
        form: auth.register,
        auth : auth.auth,
        authError : auth.authError,
        user : user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form : 'register',
            key : name,
            value
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const {
            name,
            phoneNumber,
            email,
            password,
            passwordConfirm,
            nick,
            gender,
            address,
            addressFile
        } = form;

        if(password !== passwordConfirm) {
            // TODO : 오류 처리
            return;
        }
        dispatch(register({
            name,
            phoneNumber,
            email,
            password,
            nick,
            gender,
            address,
            addressFile
        }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    /*
    useEffect(() => {
        if(authError) {
            console.log('회원가입 오류 발생');
            console.log(authError);
            return;
        }

        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user){
            console.log('check API 성공');
            console.log(user);
        }
    }, [user]);


     */
    return (
        <SignUpStep3
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default ContainerRegisterForm;

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, register} from "../auth";
import RegisterForm from "../../components/routing-page/register/step03/RegisterForm";

const RegisterFormContainer = () => {
    const dispatch = useDispatch();
    const {form, auth, authError}  = useSelector(({auth, user}) =>({
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

    const onChangeFile = (value) => {
        dispatch(changeField({
            form : 'register',
            key : 'addressFile',
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
            age,
            postCode,
            address,
            detailAddress,
            extraAddress,
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
            age,
            postCode,
            address,
            detailAddress,
            extraAddress,
            addressFile
        }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            console.log('오류 발생');
            console.log(authError)
        }

        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
        }
    }, [auth, authError]);

    return (
        <RegisterForm
            form={form}
            onChange={onChange}
            onChangeFile={onChangeFile}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterFormContainer;

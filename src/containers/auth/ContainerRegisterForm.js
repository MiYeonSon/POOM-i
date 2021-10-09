import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, register} from "../../modules/auth";
import SignUpStep3 from "../../components/signUp/SignUpStep3";

const ContainerRegisterForm = () => {
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

    return (
        <SignUpStep3
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default ContainerRegisterForm;

import client from "./client";

export const login = ({email, password}) => client.post(
    'signin',
    {email : email, password : password},
    {
        headers: {"Content-Type": "application/json"}
    }
);

export const register = ({name, phoneNumber, email, password, nick, gender, address, file}) => client.post(
    'signup',
    {
        name : name,
        phoneNumber : phoneNumber,
        email : email,
        password : password,
        nick : nick,
        gender : gender,
        address : address,
        file : file
    },
    {
        headers : {"Content-type": "multipart/form-data"}
    }

)

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
import client from "./client";

export const login = ({email, password}) => client.post(
    '/signin',
    {email : email, password : password},
    {
        headers: {"Content-Type": "application/json"}
    }
);

export const register = (
    {
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
    }) => client.post(
    '/signup',
    {
        name: name,
        phone_number: phoneNumber,
        email: email,
        password: password,
        nick: nick,
        gender: gender,
        age : Number(age),
        post_code:postCode,
        address: address,
        detail_address : detailAddress,
        extra_address : extraAddress,
        address_certification_file: addressFile
    },
    {
        "Content-Type": "application/json",
    }
)

export const logout = () => client.post('/logout', {}, {
    headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzYxMTQ5MDMsInN1YiI6ImFkbWluQHRlc3QuY29tIiwiYXV0aCI6IlJPTEVfQURNSU4ifQ.0XRRJcM80u0yyb25YK3TjQP2gN9E9t-s0Tep-Ba71E0`
    }
});

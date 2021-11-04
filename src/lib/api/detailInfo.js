import client from "./client";

export const getChildList = (token) => client.get('/member/child', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const getClassList = (token) => client.get('/group', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
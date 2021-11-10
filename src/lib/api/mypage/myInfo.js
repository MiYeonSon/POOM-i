import client from "../client";

export const getMyInfo = ({token}) => client.get('/member/me', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
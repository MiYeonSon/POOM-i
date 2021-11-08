import client from "../client";

export const getActivityInfo = ({token}) => client.get('/member/poomi',
    {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

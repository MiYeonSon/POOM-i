import client from "../../client";

export const listApplyMemberInfo = ({token}) => client.get('/admin/member', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
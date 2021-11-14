import client from "../../client";

export const listApplyMemberInfo = ({token}) => client.get('/admin/member', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const listApplyForm = ({token}) => client.get('/admin/vote', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
import client from './client';

export const childcareSupportWritePost = ({token, expertId, childId, contents}) =>
    client.post(`/expert/${expertId}/apply`, {
        contents: contents,
        child_id: Number(childId)
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

export const childcareSupportListPosts = ({token, expertId}) => client.get(`/expert/${expertId}/apply`,{
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
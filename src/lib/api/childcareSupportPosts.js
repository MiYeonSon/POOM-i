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
import client from '../client';

export const childcareSupportWritePost = ({token, expertId, childId, contents}) =>
    client.post(`/expert/${expertId}/apply`, {
        contents: contents,
        child_id: childId
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

export const childcareSupportListPosts = ({token, expertId}) => client.get(`/expert/${expertId}/apply`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const childcareSupportUpdatePost = ({
                                               token,
                                               expertId,
                                               applyId,
                                               contents,
                                               childId
                                           }) => client.patch(`/expert/${expertId}/apply/${applyId}`, {
    contents: contents,
    child_id: childId
}, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const childcareSupportRemovePost = ({
                                               token,
                                               expertId,
                                               applyId,
                                           }) => client.delete(`/expert/${expertId}/apply/${applyId}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
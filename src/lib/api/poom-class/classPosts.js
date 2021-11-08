import client from '../client';

export const classWritePost = ({
                                   token,
                                   groupId,
                                   contents,
                                   images
                               }) => client.post('/board', {
        group_id: groupId,
        contents: contents,
        images: images
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
);

export const classListPosts = (token) => client.get('/board', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const classUpdatePost = ({
                                    token,
                                    groupId,
                                    contents,
                                    remove_images,
                                    images,
                                    originalPostId
                                }) => client.patch(`/board/${originalPostId}`, {
        groupId: groupId,
        contents: contents,
        remove_image_ids: [
            remove_images[0].image_id
        ],
        images: new Array(images),
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
);

export const classRemovePost = (token, board_id) => client.delete(`/board/${board_id}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
import client from './client';
import {token} from './token';

export const classWritePost = ({
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

export const classListPosts = () => client.get('/board', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const classUpdatePost = ({
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

export const classRemovePost = board_id => client.delete(`/board/${board_id}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
import client from "./client";

export const classCommentWritePost = ({
                                          token,
                                          boardId,
                                          contents
                                      }) =>
    client.post(`/board/${boardId}/comment`, {
            contents
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    );

export const classCommentListPosts = ({token, boardId}) => client.get(`/board/${boardId}/comment`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const classCommentRemovePost = ({token, commentId}) => client.delete(`/comment/${commentId}`, {
    headers : {
        "Authorization": `Bearer ${token}`
    }
});
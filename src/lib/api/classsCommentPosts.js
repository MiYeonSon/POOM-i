import client from "./client";
import {token} from "./token";

export const classCommentWritePost = ({
                                          boardId,
                                          contents
                                      }) => client.post(`/board/${boardId}/comment`, {
        contents
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
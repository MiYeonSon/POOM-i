/*
import client from './client';
import {token} from './token';
/*
 * 포스트 관련된 API를 요청하는 함수 모음
 */
/*

export const writePost = ({
                              contents,
                              recruit_type,
                              child_id,
                              start_date,
                              start_time,
                              end_date,
                              end_time
                          }) => client.post('expert', {
        contents: contents,
        recruit_type: recruit_type,
        child_id: Number(child_id),
        start_time: `${start_date}T${start_time}`,
        end_time: `${end_date}T${end_time}`
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
);

export const readPost = (expertId) => client.get(`expert/${expertId}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const listPosts = () => client.get('expert', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

export const removePost = expertId => client.delete(`expert/${expertId}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const updatePost = ({
                               expert_id,
                               contents,
                               recruit_type,
                               child_id,
                               start_date,
                               start_time,
                               end_date,
                               end_time
                           }) => client.patch(`expert/${expert_id}`, {
    contents: contents,
    recruit_type: recruit_type,
    child_id: Number(child_id),
    start_time: `${start_date}T${start_time}`,
    end_time: `${end_date}T${end_time}`
}, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});
*/
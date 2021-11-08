import client from '../client';
/*
 * 포스트 관련된 API를 요청하는 함수 모음
 */
export const writeChildcarePost = ({
                                       token,
                                       contents,
                                       recruit_type,
                                       child_id,
                                       start_date,
                                       start_time,
                                       end_date,
                                       end_time
                                   }) => client.post('/expert', {
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

export const childcareListPosts = (token) => client.get('/expert', {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

export const removeChildcarePost = (token, expertId) => client.delete(`/expert/${expertId}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const updateChildcarePost = (
    {
        token,
        expert_id,
        contents,
        recruit_type,
        child_id,
        start_date,
        start_time,
        end_date,
        end_time
    }) => client.patch(`/expert/${expert_id}`, {
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


export const likedChildCarePost = (token, expertId) => client.post(`/expert/${expertId}/like`, {}, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const likedCancelChildCarePost = (token, expertId) => client.delete(`/expert/${expertId}/like`,  {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});


import client from './client';

// 포스트 관련된 API를 요청하는 함수
export const writePost = ({
                              body,
                              is_recurit,
                              child_id,
                              start_date,
                              start_time,
                              end_date,
                              end_time
                          }) => client.post('expert', {
        contents: body,
        recruit_type: is_recurit,
        child_id: Number(child_id),
        start_time: `${start_date}T${start_time}`,
        end_time: `${end_date}T${end_time}`
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MzM2NTEyMTF9.NRd7AtMLOVcYDBtHz8p-vB2UdAn5JR5yo_0Jxuckchw"
        }
    }
);
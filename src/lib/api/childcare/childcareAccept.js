import client from "../client";

export const acceptChildcare = ({
                                    token,
                                    expertId,
                                    applyId
                                }) => client.post(`/expert/${expertId}/approve/${applyId}`, {},
    {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
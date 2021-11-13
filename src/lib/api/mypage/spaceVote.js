import client from "../client";

export const getVoteInfo = ({token, voteId}) => client.get(`/vote/${voteId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
);


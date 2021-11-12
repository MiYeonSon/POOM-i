import client from "../client";

export const getPlaceInfo = ({token, voteId}) => client.get(`/playground/vote/${voteId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
);
import client from "../client";

export const getFormList = ({token}) => client.get(`/playground/vote`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
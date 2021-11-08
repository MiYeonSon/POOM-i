import client from "../client";

export const readList = ({token}) => client.get(`/playground`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
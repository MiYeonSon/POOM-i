import client from "./client";

export const submitFile = ({
                                token,
                                file
                            }) => client.post('/residence-certification', {
    file : file
}, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});
import client from "../client";


export const makeVote = ({
                             token,
                             images,
                             postCode,
                             address,
                             detailAddress,
                             extraAddress,
                             purposeUsing
                         }) => client.post('/playground/vote', {
    post_code: postCode,
    address : address,
    detail_address : detailAddress,
    extra_address : extraAddress,
    purpose_using : purposeUsing,
    images : images
}, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})


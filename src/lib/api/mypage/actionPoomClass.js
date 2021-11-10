import client from "../client";

export const createClass = ({
                                title,
                                meetingDay,
                                mainActivity,
                                description,
                                recruitmentStatus,
                                profileImage,
                                token,
                            }) => client.post(`/group`, {
    name: title,
    regular_meeting_day: meetingDay,
    main_activity: mainActivity,
    description: description,
    recruitment_status: recruitmentStatus,
    profile_image: profileImage
}, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});

export const readClass = ({
                              token,
                              groupId
                          }) => client.get(`/group/${groupId}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
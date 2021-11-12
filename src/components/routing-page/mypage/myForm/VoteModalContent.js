import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getPlaceInfo} from "../../../../lib/api/mypage/spaceVote";

const VoteModalContent = ({voteId}) => {
    const {token}  = useSelector(({user}) => ({
        token : user.token
    }));

    useEffect(() => {
        getPlaceInfo({token, voteId}).then(r => console.log(r));
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default VoteModalContent;

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVoteInfo} from "../modules/mypage/voteSpaceInfo";
import VoteSpaceInfo from "../components/routing-page/mypage/myForm/VoteSpaceInfo";
import ContainerVoteSpaceInfo from "../containers/mypage/myForm/ContainerVoteSpaceInfo";

const VotePage = ({match}) => {
    const {voteId} = match.params;

    return (
        <>
            <ContainerVoteSpaceInfo voteId={voteId}/>
        </>
    );
};

export default VotePage;

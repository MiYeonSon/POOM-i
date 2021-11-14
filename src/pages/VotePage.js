import React from 'react';
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

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVoteInfo} from "../../../modules/mypage/voteSpaceInfo";
import VoteSpaceInfo from "../../../components/routing-page/mypage/myForm/VoteSpaceInfo";

const ContainerVoteSpaceInfo = ({voteId}) => {
    const dispatch = useDispatch();

    const {voteSpaceInfo, voteSpaceInfoError, loading, token} = useSelector(({voteSpaceInfo, loading, user}) => ({
        voteSpaceInfo : voteSpaceInfo.voteSpaceInfo,
        voteSpaceInfoError : voteSpaceInfo.voteSpaceInfoError,
        loading : loading['voteSpaceInfo/GET_VOTE_INFO'],
        token : user.token
    }));

    useEffect(() => {
       dispatch(getVoteInfo({token, voteId}));
    }, [dispatch, token, voteId]);

    return (
        <>
            <VoteSpaceInfo voteId={voteId} info={voteSpaceInfo} loading={loading} error={voteSpaceInfoError}/>
        </>
    );
};

export default ContainerVoteSpaceInfo;

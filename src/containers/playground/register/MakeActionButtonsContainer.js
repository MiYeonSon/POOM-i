import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeVote} from "../../../modules/playground/register/makeVoteForm";
import MakeActionButtons from "../../../components/routing-page/playground/MakeActionButtons";

const MakeActionButtonsContainer = () => {
    const dispatch = useDispatch();

    const {
        images,
        postCode,
        address,
        detailAddress,
        extraAddress,
        purposeUsing,
        vote,
        voteError,
        token
    } = useSelector(({makeVoteForm, user}) => ({
        images: makeVoteForm.images,
        postCode: makeVoteForm.postCode,
        address : makeVoteForm.address,
        detailAddress: makeVoteForm.detailAddress,
        extraAddress: makeVoteForm.extraAddress,
        purposeUsing: makeVoteForm.purposeUsing,
        vote : makeVoteForm.vote,
        voteError : makeVoteForm.voteError,
        token : user.token
    }));

    const onPublish = () => {
        dispatch(makeVote({
            token,
            postCode,
            address,
            detailAddress,
            extraAddress,
            purposeUsing,
            images
        }))
    };
    
    useEffect(() => {
        if(vote) {
            alert('생성 성공');
        }

        if(voteError) {
            alert('생성 실패');
            console.log(voteError);
        }
    }, [vote, voteError]);


    return (
        <MakeActionButtons onPublish={onPublish} />
    );
};

export default MakeActionButtonsContainer;

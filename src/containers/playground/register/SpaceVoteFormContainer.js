import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/playground/register/makeVoteForm";
import SpaceVoteForm from "../../../components/routing-page/playground/SpaceVoteForm";

const SpaceVoteFormContainer = () => {
    const dispatch = useDispatch();
    const {
        images,
        postCode,
        address,
        detailAddress,
        extraAddress,
        purposeUsing
    } = useSelector(({makeVoteForm}) => ({
        images: makeVoteForm.images,
        postCode: makeVoteForm.postCode,
        address : makeVoteForm.address,
        detailAddress: makeVoteForm.detailAddress,
        extraAddress: makeVoteForm.extraAddress,
        purposeUsing: makeVoteForm.purposeUsing
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
        dispatch
    ]);

    const onChangeAddress = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form : 'register',
            key : name,
            value
        }));
    }

    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    return (
        <SpaceVoteForm onChangeField={onChangeField}
                       onChangeAddress={onChangeAddress}
                       images={images}
                       postCode={postCode}
                       address={address}
                       detailAddress={detailAddress}
                       extraAddress={extraAddress}
                       purposeUsing={purposeUsing}
        />
    );
};

export default SpaceVoteFormContainer;

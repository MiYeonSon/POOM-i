import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {applyClass} from "../../../modules/mypage/applyPoomClass";
import RectButton from "../../../components/common/RectButton";

const ContainerApplyActionButton = ({onClose, groupId}) => {
    const dispatch = useDispatch();

    const {contents, childId, apply, applyError, token} = useSelector(({
        applyPoomClass, user
    }) => ({
        contents : applyPoomClass.contents,
        childId : applyPoomClass.childId,
        apply : applyPoomClass.apply,
        applyError : applyPoomClass.applyError,
        token : user.token
    }));



    const onApply = () => {
        dispatch(
            applyClass({
                token,
                groupId,
                contents,
                childId
            })
        );

        onClose();
    };

    useEffect(() => {
        if(apply) {
            console.log('apply success');
        }

        if(applyError) {
            console.log(applyError);
        }

    })

    return (
        <div>
            <RectButton backgroundColor={'#FFB663'} onClick={onApply}>지원하기</RectButton>
        </div>
    );
};

export default ContainerApplyActionButton;

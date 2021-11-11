import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listActivity} from "../../../modules/mypage/activityInfo";
import ChildList from "../../../components/routing-page/mypage/myActivity/ChildList";
import {ContentMiddleHeader} from "../../../components/common/layout/StyledHeader";
import PoomClassList from "../../../components/routing-page/mypage/myActivity/PoomClassList";
import {BsPencilSquare} from "react-icons/bs";
import { AiOutlinePlus, AiOutlinePlusSquare } from "react-icons/ai";
import Modal from "../../../components/common/Modal";
import ContainerCreatePoomClass from "./ContainerCreatePoomClass";
import ContainerCreateActionButton from "./ContainerCreateActionButton";

const ContainerActivity = () => {
    const dispatch = useDispatch();

    const {list, error, loading, token} = useSelector(
        ({activityInfo, loading, user}) => ({
            list: activityInfo.list,
            error: activityInfo.error,
            loading: loading['activityInfo/LIST_ACTIVITY'],
            token: user.token
        })
    );

    useEffect(() => {
        dispatch(listActivity({token}));
    }, [dispatch]);

    const [modal, setModal] = useState(false);

    return (
        <>
            <ContentMiddleHeader>자녀 관리</ContentMiddleHeader>
            <ChildList loading={loading} error={error} list={list}/>

            <ContentMiddleHeader>
                품앗이 반 관리

                <AiOutlinePlus style={{margin: '0 0.3vw', cursor: 'pointer'}}
                               onClick={() => setModal(!modal)} />
                {modal && (
                    <Modal visible={modal} onClose={() => setModal(false)}>
                        <ContainerCreatePoomClass />
                        <div style={{textAlign : 'right'}}>
                            <ContainerCreateActionButton />
                        </div>
                    </Modal>
                )}
            </ContentMiddleHeader>
            <PoomClassList loading={loading} error={error} list={list} />
        </>
    );
};

export default ContainerActivity;

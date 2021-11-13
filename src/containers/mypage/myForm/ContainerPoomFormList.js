import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listForm} from "../../../modules/mypage/spaceFormInfo";
import MadePoomFormList from "../../../components/routing-page/mypage/myForm/MadePoomFormList";
import {ContentMiddleHeader} from "../../../components/common/layout/StyledHeader";
import PoomFormList from "../../../components/routing-page/mypage/myForm/PoomFormList";

const ContainerPoomFormList = () => {
    const dispatch = useDispatch();

    const {forms, error, loading, token} = useSelector(
        ({spaceFormInfo, loading, user}) => ({
            forms: spaceFormInfo.forms,
            error: spaceFormInfo.error,
            loading: loading['spaceFormInfo/LIST_FORM'],
            token: user.token
        })
    );

    useEffect(() => {
        dispatch(listForm({token}));
    }, [dispatch, token]);

    return (
        <>
            <ContentMiddleHeader>진행 중인 투표 폼 목록</ContentMiddleHeader>
            <PoomFormList loading={loading}
                          error={error}
                          forms={forms}/>

            <ContentMiddleHeader style={{margin: '3vw 0 0 '}}>제작한 품앗이 터 등록 폼 목록</ContentMiddleHeader>
            <MadePoomFormList loading={loading}
                              error={error}
                              forms={forms}
            />

        </>
    );
};

export default ContainerPoomFormList;

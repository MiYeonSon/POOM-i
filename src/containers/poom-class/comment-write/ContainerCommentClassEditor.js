import React, {useCallback, useEffect} from 'react';
import CommentClassEditor from "../../../components/routing-page/poom-class/comment-write/CommentClassEditor";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/poom-class/classCommentWrite";

const ContainerCommentClassEditor = () => {
    const dispatch = useDispatch();

    const {contents } = useSelector(({classCommentWrite}) => ({
        contents: classCommentWrite.contents
    }));

    const onChangeFiled = useCallback(payload => dispatch(changeField(payload)), [
        dispatch
    ]);


    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return (
        <>
            <CommentClassEditor onChangeField={onChangeFiled} contents={contents}/>
        </>

    );
};

export default ContainerCommentClassEditor;

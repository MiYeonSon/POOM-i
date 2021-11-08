import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/childcare/childcareWrite";
import ChildcareEditor from "../../../components/routing-page/childcare/write/ChildcareEditor";
import ContainerChildcareWriteActionsButton from "./ContainerChildcareWriteActionsButton";


const ContainerChildcareEditor = () => {
// useDispatch와 useSelector 함수를 사용하여 컴포넌트를 리덕스와 연동시킨다.

    /*
     * useDispatch는 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.
     * 컨테이너 컴포넌트에서 액션을 디스패치 해야 할 때 사용
     */
    const dispatch = useDispatch();

    /*
     * useSelector Hook은 리덕스의 상태를 조회할 수 있다.
     * 사용 방법 : const 결과 = useSelector(상태 선택 함수);
     */

    // 여기서의 wirte는 리덕스 스토어인 modules/write로 리덕스 스토어의 상태를 들고오는 것임.
    const {contents, recruit_type, child_id, start_date, start_time, end_date, end_time, childList} = useSelector(({childcareWrite, detailInfo}) => ({
        contents: childcareWrite.contents,
        recruit_type: childcareWrite.recruit_type,
        child_id: childcareWrite.child_id,
        start_date: childcareWrite.start_date,
        start_time: childcareWrite.start_time,
        end_date: childcareWrite.end_date,
        end_time: childcareWrite.end_time,
        childList : detailInfo.childList
    }));

    // 컴포넌트 성능을 최적화해야하기 때문에 useCallback으로 액션을 디스패치하는 함수를 감싸준다.
    /*
     * useCallback
     * 1. 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고
     * 2. 두 번째 파라미터에는 배열을 넣으면 된다.
          이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.
        - 비어 있는 배열의 경우, 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용된다.
        - 상태가 들어있는 배열의 경우 해당 상태가 업데이트 될 경우 새로 만들어진 함수를 사용하게 된다.
        따라서  **함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜주어야 한다.**
     */
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
        dispatch,
    ]);


    // 언마운트될 때 초기화해줌. 그렇지 않으면 페이지 이동 후 다시 돌아와도 기존의 데이터가 유지되어 있음.
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return (
        <>
            <ChildcareEditor onChangeField={onChangeField}
                             contents={contents}
                             recruit_type={recruit_type}
                             child_id={child_id}
                             start_date={start_date}
                             start_time={start_time}
                             end_date={end_date}
                             end_time={end_time}
                            childList={childList}
            />
            <ContainerChildcareWriteActionsButton/>
        </>
    );
};

export default ContainerChildcareEditor;

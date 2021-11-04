import React, {useEffect, useRef} from 'react';
import Quill from "quill";
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import {StyledInput, StyledSelect} from "../../../common/StyledInput";
import {CategoryBlock, SmallTitle} from "../../../common/post/StyledEditor";

const FindRearingEditorTemplate = styled.div`
  font-family: paybooc-Medium;
  font-size: 0.8vw;
  color: #707070;
`;



const CategoryContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0 0.5vw;
`;




const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 100%;
    height: 12vh;
    font-family: paybooc-Medium;
    font-size: 0.8vw;
    line-height: 1.5;
    background-color: #F3F3F3;
  }


  // placeholder css
  .ql-editor.ql-blank::before {
    font-family: paybooc-Medium;
    font-style: normal;
  }


`;


const ChildcareEditor = ({
                               contents,
                               recruit_type,
                               child_id,
                               start_date,
                               start_time,
                               end_date,
                               end_time,
                               onChangeField
                           }) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요...',
            modules: {
                // 더 많은 옵션
                // https://quilljs.com/docs/modules/toolbar/ 참고
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });

        // quill에 text-change 이벤트 핸들러 등록
        // 참고: https://quilljs.com/docs/api/#events
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({key: 'contents', value: quill.root.innerHTML});
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = contents;
    }, [contents]);


    const onChangeRecruit = e => {
        onChangeField({key: 'recruit_type', value: e.target.value});
    }

    const onChangeChildID = e => {
        onChangeField({key: 'child_id', value: e.target.value});
    }

    const onChangeDate = (type, e) => {
        onChangeField({key: `${type}_date`, value: e.target.value});
    };


    const onChangeTime = (type, e) => {
        onChangeField({key: `${type}_time`, value: e.target.value});
    };

    return (
        <FindRearingEditorTemplate>
            <CategoryBlock>
                <SmallTitle>* 분류</SmallTitle>

                <CategoryContent onChange={onChangeRecruit}>
                    <label><input type="radio" name={'recruit_type'} value={'RECRUIT'}/>품앗이꾼 모집</label>
                    <label><input type="radio" name={'recruit_type'} value={'VOLUNTEER'}/>품앗이꾼 자원</label>
                </CategoryContent>
            </CategoryBlock>

            <CategoryBlock>
                <SmallTitle>* 자녀</SmallTitle>
                <CategoryContent>
                    <StyledSelect onChange={onChangeChildID}>
                        <option value="null">-</option>
                        <option value="1">자녀 1</option>
                        <option value="2">자녀 2</option>
                        <option value="3">자녀 3</option>
                    </StyledSelect>
                </CategoryContent>
            </CategoryBlock>

            <CategoryBlock>
                <SmallTitle>* 활동 시간</SmallTitle>
                <CategoryContent>
                    <div style={{display: 'inline'}}>
                        <StyledInput type="date" onChange={(e) => onChangeDate('start', e)}/>
                        <StyledInput type={"time"} onChange={(e) => onChangeTime('start', e)}/>
                    </div>
                    <div style={
                        {
                            width: "inherit",
                            fontFamily: 'paybooc-Medium',
                            fontSize: '1vw',
                            textAlign: 'center',
                        }
                    }>
                        ~
                    </div>
                    <div style={{display: 'inline'}}>
                        <StyledInput type={"date"} onChange={(e) => onChangeDate('end', e)}/>
                        <StyledInput type={"time"} onChange={(e) => onChangeTime('end', e)}/>
                    </div>
                </CategoryContent>
            </CategoryBlock>
            <CategoryBlock style={{padding: '0'}}>
                <SmallTitle>* 내용</SmallTitle>
                <CategoryContent>
                    <QuillWrapper>
                        <div ref={quillElement}/>
                    </QuillWrapper>
                </CategoryContent>

            </CategoryBlock>
        </FindRearingEditorTemplate>
    );
};

export default ChildcareEditor;

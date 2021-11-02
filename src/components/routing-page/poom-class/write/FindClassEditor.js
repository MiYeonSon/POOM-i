import React, {useEffect, useRef} from 'react';
import Quill from "quill";
import 'quill/dist/quill.bubble.css'
import styled from 'styled-components';
import {StyledSelect} from "../../../common/StyledInput";
import AddFileImg from "../asset/addFile.png"

const SmallTitle = styled.div`
  margin: 2vw 0 0.5vw;
  font-family: paybooc-Bold;
  font-size: 0.9vw;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 100%;
    height: 15vh;
    font-family: paybooc-Medium;
    font-size: 0.8vw;
    line-height: 1.5;
    background-color: #F3F3F3;
  }

  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;


const AddFileButtonBlock = styled.div`
  display: flex;
  
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  .upload-name {
    height: 35px;
    padding: 0 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
`;

const FindClassEditor = ({groupId, contents, images, onChangeField}) => {
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

    const onChangeGroupId = e => {
        onChangeField({key: 'groupId', value: e.target.value});
    };

    const onChangeFiles = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            /*
            if(imgArr){
                imgArr.push(reader.result);
                onChangeField({key : 'images', value : imgArr});
            } else {
                imgArr = new Array(reader.result);
                onChangeField({key : 'images', value : imgArr});
            }
             */

            onChangeField({key: 'images', value: reader.result});
        }
    };

    return (
        <>
            <SmallTitle>* 품앗이 반</SmallTitle>
            <StyledSelect onChange={onChangeGroupId} value={groupId}>
                <option value="null">-</option>
                <option value="1">숲이 조아</option>
            </StyledSelect>

            <SmallTitle>* 내용</SmallTitle>
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>

            <SmallTitle>* 첨부 파일</SmallTitle>

            <AddFileButtonBlock>
                <label style={{margin: '0.6vw', cursor: 'pointer'}}>
                    <img src={AddFileImg} alt="파일추가" style={{width: '4vw', height: '4vw'}}/>
                    <input type="file" accept={".jpg, .png, .pdf"} onChange={onChangeFiles}/>
                </label>

            </AddFileButtonBlock>

        </>
    );
};

export default FindClassEditor;

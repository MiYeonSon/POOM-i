import React, {useEffect, useRef} from 'react';
import Quill from "quill";
import 'quill/dist/quill.bubble.css'
import styled from 'styled-components';

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 100%;
    height: 10vh;
    font-family: paybooc-Medium;
    font-size: 0.8vw;
    line-height: 1.5;
    border-top: 4px solid #AAAAAA;
  }

  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const CommentClassEditor = ({contents, onChangeField}) => {
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

    return (
        <>
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>
        </>
    );
};

export default CommentClassEditor;

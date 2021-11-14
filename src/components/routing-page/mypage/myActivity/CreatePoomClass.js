import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {StyledInput} from "../../../common/styling/StyledInput";
import Quill from "quill";
import 'quill/dist/quill.bubble.css';

const CreatePoomClassTemplate = styled.div`
  font-size: 1vw;
  font-weight: 400;
`;

const InputContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin: 1vw 0;
`;


const CategoryBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin: 0.4vw 0;
  padding: ${props => props.padding || '0 0 0.5vw'};
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 100%;
    height: 10vh;
    margin: 0.5vw;
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

const StyledRadioInputBlock = styled.div`
  padding: 0.2vw 0.5vw;
  font-size: 0.9vw;
  font-weight: 300;

  input {
    margin: 0.3vw 0;
  }
`;


const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 2vw 0 1.2vw;

  font-size: 1.3vw;
  font-weight: 700;
  color: #4E7093;
`;

const CreatePoomClass = ({
                             onChangeField,
                             title,
                             meetingDay,
                             mainActivity,
                             description,
                             recruitmentStatus,
                             profileImage
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

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({key: 'description', value: quill.root.innerHTML});
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = description;
    }, [description]);

    const onChangeFiles = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            onChangeField({key: 'profileImage', value: reader.result});
        }
    };

    return (
        <CreatePoomClassTemplate>
            <Header>[ 품앗이 반 생성 ]</Header>
            <InputContent>

                <CategoryBlock>
                    <label>
                        * 품앗이 반 이름 : <StyledInput type="text"
                                                  width={'65%'}
                                                  onChange={(e) => {
                                                      onChangeField({key: 'title', value: e.target.value})
                                                  }}/></label> <br/>
                </CategoryBlock>

                <CategoryBlock>
                    <label>* 정기 모임일 : <StyledInput type="text" width={'70%'} onChange={(e) => {
                        onChangeField({key: 'meetingDay', value: e.target.value})
                    }}/></label> <br/>
                </CategoryBlock>

                <CategoryBlock>
                    <label>* 주요 활동 : <StyledInput type="text" width={'75%'} onChange={(e) => {
                        onChangeField({key: 'mainActivity', value: e.target.value})
                    }}/></label> <br/>
                </CategoryBlock>

                <CategoryBlock>
                    <label>* 소개
                        <QuillWrapper>
                            <div ref={quillElement}/>
                        </QuillWrapper>
                    </label>
                </CategoryBlock>

                <CategoryBlock>
                    * 모집 시작일 <br/>
                    <StyledRadioInputBlock onChange={(e) => {
                        onChangeField({key: 'recruitmentStatus', value: e.target.value})
                    }}>
                        <label><input type="radio" name={'recruitmentStatus'} value={'RECRUITING'}/> 즉시</label> <br/>
                        <label><input type="radio" name={'recruitmentStatus'} value={'CLOSED'}/> 추후 모집 <span
                            style={{fontSize: '0.7vw'}}>(품앗이 생성 후 현 페이지에서 가능합니다.)</span>
                        </label> <br/>
                    </StyledRadioInputBlock>
                </CategoryBlock>

                <CategoryBlock>
                    * 품앗이 대표 이미지 설정 :
                    <div style={{margin: '0.5vw 0.6vw'}}>
                            <input type="file" accept={".jpg, .png"} onChange={onChangeFiles} />
                    </div>
                </CategoryBlock>
            </InputContent>

        </CreatePoomClassTemplate>
    );
};

export default CreatePoomClass;

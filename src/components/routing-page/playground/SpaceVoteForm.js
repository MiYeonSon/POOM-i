import React, {useEffect, useRef, useState} from 'react';
import {ContentSmallHeader} from "../../common/StyledHeader";
import {RoundSquareLabel, StyledInput} from "../../common/StyledInput";
import RectButton from "../../common/RectButton";
import DaumPostcode from "react-daum-postcode";
import CommonHr from "../../common/CommonHr";
import Quill from "quill";
import styled from "styled-components";


const FormTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 3vw 4vw;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 10px;
`;

const ItemBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1vw 0 3vw;
  font-size: 1vw;

  #radioBlock {
    box-sizing: border-box;
    width: 80%;
    margin: 0.5vw 1vw;

    font-size: 0.9vw;
    font-weight: 300;
    line-height: 1.7vw;
  }
`;

const AddressBlock = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 1vw;
`;

const QuillWrapper = styled.div`
  margin: 0.5vw 1vw;

  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 60%;
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

const SpaceVoteForm = ({onChangeField, onChangeAddress, images, postCode, address, detailAddress, extraAddress, purposeUsing}) => {
    // 주소 입력 부분
    const [isDaumPost, setIsDaumPost] = useState(false);

    const postCodeRef = useRef(null);
    const addrRef = useRef(null);
    const detailAddrRef = useRef(null);
    const extraAddrRef = useRef(null);

    const handleComplete = (data) => {
        let addr = ''; // 주소 변수
        let extraAddr = ''; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            alert('도로명 주소를 선택하여 주세요.');
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== '') {
                extraAddr = ' (' + extraAddr + ')';
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            extraAddrRef.current.setAttribute('value', extraAddr);
            ;
            extraAddrRef.current.dispatchEvent(new Event('change', {bubbles: true}));

        } else {
            // extraAddrRef.current.value = '';
            extraAddrRef.current.setAttribute('value', extraAddr);
            ;
            extraAddrRef.current.dispatchEvent(new Event('change', {bubbles: true}));
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        postCodeRef.current.setAttribute('value', data.zonecode);
        postCodeRef.current.dispatchEvent(new Event('change', {bubbles: true}));


        addrRef.current.setAttribute('value', addr);
        addrRef.current.dispatchEvent(new Event('change', {bubbles: true}));

        // 커서를 상세주소 필드로 이동한다.
        detailAddrRef.current.focus();
    }

    const handleOpenPost = () => {
        setIsDaumPost(!isDaumPost);
    }

    // quill 라이브러리를 사용하여 사용 목적에 대한 입력 처리
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
                onChangeField({key: 'purposeUsing', value: quill.root.innerHTML});
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = purposeUsing;
    }, [purposeUsing]);

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
    }

    return (
        <div>
            <FormTemplate>
                <ContentSmallHeader style={{fontWeight: '700'}}>[ 공간 소개 ]</ContentSmallHeader>
                <ItemBlock>
                    1. 이용 하고자 하는 공간 사진을 업로드 해주세요.(최소 2장)
                    <RoundSquareLabel margin={'0.5vw 1vw'}>
                        파일 선택하기
                        <input type="file" accept={".jpg, .png, .pdf"} onChange={onChangeFiles}/>
                    </RoundSquareLabel>
                </ItemBlock>


                <ItemBlock>
                    2. 사용하고자 하는 품앗이 터의 주소를 입력해주세요.
                    <AddressBlock>
                        <StyledInput type="text"
                                     id={'postCode'}
                                     name={'postCode'}
                                     ref={postCodeRef}
                                     placeholder={'우편번호'}
                                     onChange={onChangeAddress}
                                     value={postCode}
                                     width={'10vw'}
                                     height={'2vw'}
                        />

                        <RectButton type={"button"} onClick={handleOpenPost} color={'#8E8E8E'}>우편 번호 찾기</RectButton>

                        <br/>

                        {isDaumPost && (
                            <DaumPostcode onComplete={handleComplete} autoClose/>
                        )}

                        <StyledInput type="text"
                                     id={'address'}
                                     name={'address'}
                                     ref={addrRef}
                                     placeholder={'주소'}
                                     onChange={onChangeAddress}
                                     value={address}
                                     width={'25vw'}
                                     height={'2vw'}
                        />
                        <br/>

                        <StyledInput type="text"
                                     id={'detailAddress'}
                                     name={'detailAddress'}
                                     ref={detailAddrRef}
                                     placeholder={'상세주소'}
                                     value={detailAddress}
                                     onChange={onChangeAddress}

                                     width={'12.8vw'}
                                     height={'2vw'}
                        />
                        <StyledInput type="text"
                                     id={'extraAddress'}
                                     name={'extraAddress'}
                                     ref={extraAddrRef}
                                     placeholder={'추가'}
                                     value={extraAddress}
                                     onChange={onChangeAddress}

                                     width={'12vw'}
                                     height={'2vw'}
                        />
                    </AddressBlock>
                </ItemBlock>

                <ItemBlock>
                    3. 단지 내 거주민에게 공간 이용 목적을 설명해주세요.
                    <QuillWrapper>
                        <div ref={quillElement}></div>
                    </QuillWrapper>
                </ItemBlock>

                <CommonHr margin={'4vw 0'}/>

                <ContentSmallHeader style={{fontWeight: '700'}}>[ 공용공간 이용 찬반 투표 ]</ContentSmallHeader>
                <ItemBlock>
                    ** 해당 공간을 품앗이 터로 활용하는 것에 찬성하십니까? **
                    <div id={'radioBlock'}>
                        <label><input type="radio" name={'spaceVote'}/>네, 찬성합니다.</label> <br/>
                        <label><input type="radio" name={'spaceVote'}/>아니요, 반대합니다.</label>
                    </div>
                </ItemBlock>

            </FormTemplate>
        </div>
    );
};

export default SpaceVoteForm;

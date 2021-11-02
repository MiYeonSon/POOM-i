import React, {useRef, useState} from 'react';
import InfoFormBlock from "../InfoFormBlock";
import styled, {css} from 'styled-components';
import DaumPostcode from "react-daum-postcode";
import RectButton from "../../../common/RectButton";

const InfoFormUnit = styled.div`

`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 20vw;
  height: 3.5vh;
  margin: 0 0.5vw;
  padding: 0;
  border: 0.01vw solid #DEDEDE;

  ${props =>
          props.inputType === "none" &&
          css`
            display: none;
          `};

  ${props =>
          props.inputType === "radio" &&
          css`
            width: 100vw;
            height: 10vw;
          `};
`;


const RegisterForm = ({form, onChange, onChangeFile, onSubmit}) => {
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

    const handleFile = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            onChangeFile(reader.result);
        }
    }

    return (
        <>
            <InfoFormBlock title={'이름'}>
                <StyledInput type="text" name={'name'} onChange={onChange} value={form.name}/>
            </InfoFormBlock>

            <InfoFormBlock title={'이메일'}>
                <StyledInput type="text" name={'email'} onChange={onChange} value={form.email}/>
            </InfoFormBlock>

            <InfoFormBlock title={'비밀번호'}>
                <StyledInput type="text" name={'password'} onChange={onChange} value={form.password}/>
            </InfoFormBlock>

            <InfoFormBlock title={'비밀번호 확인'}>
                <StyledInput type="text" name={'passwordConfirm'} onChange={onChange} value={form.passwordConfirm}/>
            </InfoFormBlock>

            <InfoFormBlock title={'닉네임'}>
                <StyledInput type="text" name={'nick'} onChange={onChange} value={form.nick}/>
            </InfoFormBlock>

            <InfoFormBlock title={'성별'}>
                <label><StyledInput type="radio" name={'gender'} id={'MALE'} onChange={onChange}
                                    value={"MALE"}/>남자</label>
                <label><StyledInput type="radio" name={'gender'} id={'FEMALE'} onChange={onChange} value={'FEMALE'}/>여자</label>
            </InfoFormBlock>

            <InfoFormBlock title={'나이'}>
                <StyledInput type={"text"} name={'age'} onChange={onChange} value={form.age}/>
            </InfoFormBlock>

            <InfoFormBlock title={'휴대전화'}>
                <StyledInput type="text" name={'phoneNumber'} onChange={onChange} value={form.phoneNumber}/>
            </InfoFormBlock>

            <InfoFormBlock title={'주소'}>


                <StyledInput type="text"
                             id={'postCode'}
                             name={'postCode'}
                             ref={postCodeRef}
                             onChange={onChange}
                             value={form.postCode}
                             placeholder={'우편번호'}
                />

                <RectButton type={"button"} onClick={handleOpenPost}>우편 번호 찾기</RectButton>

                <br/>

                {isDaumPost && (
                    <DaumPostcode onComplete={handleComplete} autoClose/>
                )}

                <StyledInput type="text"
                             id={'address'}
                             name={'address'}
                             ref={addrRef}
                             onChange={onChange}
                             value={form.address}
                             placeholder={'주소'}
                />
                <br/>

                <StyledInput type="text"
                             id={'detailAddress'}
                             name={'detailAddress'}
                             ref={detailAddrRef}
                             onChange={onChange}
                             value={form.detailAddress}
                             placeholder={'상세주소'}
                />
                <StyledInput type="text"
                             id={'extraAddress'}
                             name={'extraAddress'}
                             ref={extraAddrRef}
                             onChange={onChange}
                             value={form.extraAddress}
                             placeholder={'추가'}
                />
            </InfoFormBlock>

            <InfoFormBlock title={'주소 인증 문서 첨부'}>
                <StyledInput
                    type={'file'}
                    id={'addressFile'}
                    name={'addressFile'}
                    onChange={handleFile}
                />
            </InfoFormBlock>

            <button onClick={onSubmit}>제출</button>

            {/*
            <InfoFormBlock onChange={onChange} id={'name'} title={"이름"} inputType={"text"}
                           roundButton={"none"}/>
            <InfoFormBlock onChange={onChange} id={'email'} title={"이메일"} inputType={"email"}
                           roundButton={"none"}/>
            <InfoFormBlock onChange={onChange} id={'password'} title={"비밀번호"}
                           inputType={"password"} roundButton={"none"}/>
            <InfoFormBlock onChange={onChange} id={'passwordConfirm'} title={"비밀번호 확인"}
                           inputType={"password"}
                           roundButton={"none"}/>
            <InfoFormBlock onChange={onChange} id={'nickname'} title={"닉네임"}
                           inputType={"text"} roundButton={"닉네임 중복 확인"}/>
            <InfoFormBlock onChange={onChange} id={'phone'} title={"휴대전화"}
                           inputType={"tele"} roundButton={"none"}/>
            <InfoFormBlock onChange={onChange} id={'gender'} title={'성별'}
                           inputType={'radio'} roundButton={'none'} />

            성별

            <InfoFormBlock onChange={onChange} id={'age'} title={'나이'}
                           inputType={'number'} roundButton={'none'} />
            <InfoFormBlock onChange={onChange} id={'address'} title={"주소"} inputType={"text"}
                           roundButton={"none"}/>

                    <button type={"button"} onClick={handleOpenPost}>우편 번호 찾기</button>


                    <input type="text"
                           id={'postCode'}
                           name={'postCode'}
                           ref={postCodeRef}
                           onChange={onChange}
                           value={form.postCode}
                           placeholder={'우편번호'}
                    />
                    <br/>

                    <input type="text"
                           id={'address'}
                           name={'address'}
                           ref={addrRef}
                           onChange={onChange}
                           value={form.address}
                           placeholder={'주소'}
                    />
                    <br/>

                    <input type="text"
                           id={'detailAddress'}
                           name={'detailAddress'}
                           ref={detailAddrRef}
                           onChange={onChange}
                           value={form.detailAddress}
                           placeholder={'상세주소'}
                    />
                    <input type="text"
                           id={'extraAddress'}
                           name={'extraAddress'}
                           ref={extraAddrRef}
                           onChange={onChange}
                           value={form.extraAddress}
                           placeholder={'추가'}
                    />

            <InfoFormBlock onChange={onChange} id={'addressPaper'} title={"주소 인증 문서 첨부"}
                           inputType={"none"} roundButton={"none"}
                           FileButton/>
                */}
        </>
    );
};

export default RegisterForm;

import React, {useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import DaumPostcode from "react-daum-postcode";
import RectButton from "../../../common/RectButton";
import StyledTableRow from "../../../common/StyledTableRow";


export const StyledInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: ${props => props.width || '20vw'};
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
            <StyledTableRow header={'이름'} headerBold={true}>
                <StyledInput type="text" name={'name'} onChange={onChange} value={form.name}/>
            </StyledTableRow>

            <StyledTableRow header={'이메일'} headerBold={true}>
                <StyledInput type="text" name={'email'} onChange={onChange} value={form.email}/>
            </StyledTableRow>

            <StyledTableRow header={'비밀번호'} headerBold={true}>
                <StyledInput type="text" name={'password'} onChange={onChange} value={form.password}/>
            </StyledTableRow>

            <StyledTableRow header={'비밀번호 확인'} headerBold={true}>
                <StyledInput type="text" name={'passwordConfirm'} onChange={onChange} value={form.passwordConfirm}/>
            </StyledTableRow>

            <StyledTableRow header={'닉네임'} headerBold={true}>
                <StyledInput type="text" name={'nick'} onChange={onChange} value={form.nick}/>
            </StyledTableRow>

            <StyledTableRow header={'성별'} headerBold={true}>
                <label>
                    <input type="radio" name={'gender'} id={'MALE'} onChange={onChange} value={"MALE"}/>
                    남자
                </label>
                <label style={{margin : '0 1vw'}}>
                    <input type="radio" name={'gender'} id={'FEMALE'} onChange={onChange} value={'FEMALE'}/>
                    여자
                </label>
            </StyledTableRow>

            <StyledTableRow header={'나이'} headerBold={true}>
                <StyledInput type={"text"} name={'age'} onChange={onChange} value={form.age}/>
            </StyledTableRow>

            <StyledTableRow header={'휴대전화'} headerBold={true}>
                <StyledInput type="text" name={'phoneNumber'} onChange={onChange} value={form.phoneNumber}/>
            </StyledTableRow>

            <StyledTableRow header={'주소'} headerBold={true} >
                <div style={{padding : '1vw 0'}}>

                    <StyledInput type="text"
                                 id={'postCode'}
                                 name={'postCode'}
                                 ref={postCodeRef}
                                 onChange={onChange}
                                 value={form.postCode}
                                 placeholder={'우편번호'}
                    />

                    <RectButton type={"button"} color={'#707070'} onClick={handleOpenPost}>우편 번호 찾기</RectButton>

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
                                 width={'15vw'}
                    />
                </div>

            </StyledTableRow>

            <StyledTableRow header={'주소 인증 문서 첨부'} headerBold={true}>
                <StyledInput
                    type={'file'}
                    id={'addressFile'}
                    name={'addressFile'}
                    onChange={handleFile}
                />
            </StyledTableRow>

            <button onClick={onSubmit}>제출</button>
        </>
    );
};

export default RegisterForm;

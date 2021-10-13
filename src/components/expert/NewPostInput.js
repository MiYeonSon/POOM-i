import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../common/Modal";
import FindRearingEditorContainer from "../../containers/write/FindRearingEditorContainer";
import FindClassEditorContainer from "../../containers/write/FindClassEditorContainer";

// 클릭 시 글을 작성할 수 있는 modal 창 렌더링하는 글쓰기 컴포넌트
const StyledNewPostInput = styled.div`
  box-sizing: border-box;
  padding: 0 1.5vw;
  width: 80%;
  height: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'LotteMartDream';
  font-size: 0.8vw;
  color: #AAAAAA;
  background: #F3F3F3;
  border: none;
  outline: #DEDEDE;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
`;

const NewPostInput = ({children, content}) => {
    const [openWritingModal, setOpenWritingModal] = useState(false);

    const form = content === 'expert' ? <FindRearingEditorContainer /> : <FindClassEditorContainer />;

    return (
        <>
            <StyledNewPostInput onClick={() => setOpenWritingModal(!openWritingModal)}>{children}</StyledNewPostInput>
            {openWritingModal && <Modal>{form}</Modal>}
        </>
    );
};

export default NewPostInput;

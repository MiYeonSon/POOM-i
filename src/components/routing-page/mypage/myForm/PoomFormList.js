import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";

const PoomFormItemBlock = styled.div`
  box-sizing: border-box;
  padding: 2vw 2vw;
  width: 100%;
  display: flex;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  .nonRotate {
    transform: rotate(0);
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const PoomFormHeader = styled.div`
  font-size: 1.2vw;
  font-weight: 700;
`;

const PoomFormMoreItem = ({form}) => {
    const {detail_address} = form;

    return(
        <div style={{width: '100%', margin : '2vw 0'}}>
            <div>
                {`${detail_address}`}의 품앗이 터 활용 투표 현황
            </div>


            <div>
                미투표자 명단
            </div>            
        </div>

    );
};


const PoomFormItem = ({form}) => {
    const {address, detail_address} = form;

    const [click, setClick] = useState(false);



    return(
        <PoomFormItemBlock onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'} />

            <div style={{width: '100%', margin : '0 2vw'}}>
                <PoomFormHeader>{`${address} ${detail_address}`}</PoomFormHeader>
                {click && <PoomFormMoreItem form={form} />}
            </div>
        </PoomFormItemBlock>
    );
}


const PoomFormList = ({forms, loading, error}) => {
    if(error) {
        return <div>에러 발생</div>
    }
    
    return (
        <div style={{margin : '1vw 0'}}>
            {!loading && forms && (
                <div>
                    {forms.data.map(form => (
                        <PoomFormItem form={form} key={form.vote_id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PoomFormList;

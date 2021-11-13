import React, {useState} from 'react';
import styled from 'styled-components';
import MainLogo from "../../../common/assets/mainLogo.png";
import {StyledInput} from "../../../common/styling/StyledInput";
import RectButton from "../../../common/RectButton";
import client from "../../../../lib/api/client";
import {CommonHr} from "../../../common/styling/StyledTag";

const VoteBackground = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VoteTemplate = styled.div`
  box-sizing: border-box;
  width: 35vw;

  max-height: 85vh;
  background: white;
  border-radius: 3rem;
  padding: 2vw 3vw 3vw;
`;

const LogoBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 10vw;
`;

const TitleBlock = styled.div`
  box-sizing: border-box;
  margin: 1.5vw 0 0.2vw;
  width: 100%;

  text-align: center;
  font-size: 1.2vw;
  line-height: 1.7vw;
`;

const ContentTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1vw;
`;


const CategoryItemBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 1vw 1.2vw;
`;

const CategoryItemTitle = styled.div`
  box-sizing: border-box;

  margin: 0.2vw 0;
  font-size: 0.9vw;
`;

const CategoryItemContent = styled.div`
  box-sizing: border-box;

  font-size: 1vw;
  font-weight: 300;
`;

const PlaceImg = styled.img`
  box-sizing: border-box;
  width: 15vw;

`;

const VoteContent = ({voteId, info}) => {
    const {address, detail_address, purpose_using, expired_at, image_uris} = info.data;

    const [dong, setDong] = useState('');
    const [ho, setHo] = useState('');
    const [vote, setVote] = useState('');

    const onSubmit = () => {
        console.log(dong);
        console.log(ho);
        console.log(vote);

        client.post(`/vote/${voteId}`, {
            dong: dong,
            ho: ho,
            vote_type: vote
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    return (
        <div>
            <VoteTemplate>
                <LogoBlock>
                    <LogoImg src={MainLogo} alt={'메인로고'}/>
                </LogoBlock>

                <TitleBlock>
                    <span style={{color: '#4E7093'}}>" {address} {detail_address} "</span>를 <br/>
                    품앗이 터로 사용하기 위한 찬반 투표 <br/>
                </TitleBlock>
                <div style={{fontSize: '0.9vw', color: '#70707099', textAlign: 'center'}}>
                    ( 투표 만료일 : {expired_at} )
                </div>

                <ContentTemplate>
                    <div style={{margin: '1vw 0 2vw', textAlign: 'center'}}>
                        <PlaceImg src={image_uris} alt={"품앗이 터 이미지"}/>
                    </div>
                    <CategoryItemBlock>
                        <CategoryItemTitle>[ 이용 목적 ]</CategoryItemTitle>
                        <div style={{
                            width: '80%',
                            margin: '0 1vw'
                        }}>
                            <CategoryItemContent dangerouslySetInnerHTML={{__html: purpose_using}}/>
                        </div>
                    </CategoryItemBlock>

                    <CommonHr margin={'0.5vw 0'}/>

                    <CategoryItemBlock style={{
                        display: 'flex',
                        alignItems: 'flexEnd'
                    }}>
                        <CategoryItemTitle>* 현재 거주중인 동/호수 정보를 입력해주세요. : &nbsp;
                            <StyledInput width={'3vw'} onChange={(e) => setDong(`${e.target.value}동`)}/>동 &nbsp;
                            <StyledInput width={'3vw'} onChange={(e) => {
                                setHo(`${e.target.value}호`)
                            }}/>호
                        </CategoryItemTitle>

                    </CategoryItemBlock>

                    <CategoryItemBlock>
                        <CategoryItemTitle>
                            * 해당 공간을 품앗이 터로 활용하는 것에 찬성하십니까?
                        </CategoryItemTitle>
                        <div id={'radioBlock'} style={{margin: '0.7vw 0.5vw'}} onClick={(e) => setVote(`${e.target.value}`)}>
                            <label><input type="radio" name={'spaceVote'} value={'AGREE'}/> 네, 찬성합니다.</label>
                            <label><input type="radio" name={'spaceVote'} value={'DISAGREE'}/> 아니요, 반대합니다.</label>
                        </div>
                    </CategoryItemBlock>

                </ContentTemplate>

                <div style={{textAlign: 'right'}}>
                    <RectButton backgroundColor={'#FFB663'} onClick={onSubmit}>투표 하기</RectButton>
                </div>
            </VoteTemplate>
        </div>
    )
        ;
};


const VoteSpaceInfo = ({voteId, info, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }


    return (
        <VoteBackground>
            {!loading && info && (
                <VoteContent voteId={voteId} info={info}/>
            )}
        </VoteBackground>
    );
};

export default VoteSpaceInfo;

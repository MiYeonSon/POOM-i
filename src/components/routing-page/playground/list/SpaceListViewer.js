import React from 'react';
import styled from 'styled-components';
import {ContentHeader} from "../../../common/layout/StyledHeader";
import {ContentTemplate, Introduction} from "../../../common/layout/StyledLayout";

const SpaceItemBlock = styled.div`
  margin: 2vw 0;
  padding: 2vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #F9F9F9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #D8D8D8;
`;

const SpaceImg = styled.img`
  box-sizing: border-box;
  width: 30%;
  height: 10vw;
  border: 5px solid #FFFFFF;
`;

const SpaceContent = styled.div`
  box-sizing: border-box;

  width: 90%;
  margin: 0 2vw;
`;
const SpaceName = styled.div`
  box-sizing: border-box;
  font-size: 1.3vw;
  font-weight: 700;
`;

const SpaceExplain = styled.div`
  margin: 0.5vw 0 0;

  box-sizing: border-box;
  font-size: 1vw;
  font-weight: 300;
  line-height: 1.5vw;
`;

const SpaceItem = ({item}) => {
    return (
        <SpaceItemBlock>
            <SpaceImg src={item.image_uris[0]} alt={'품앗이 장소'}/>
            <SpaceContent>
                <SpaceName>{item.name}</SpaceName>
                <SpaceExplain>
                    * 운영 시간 : {item.operating_hours} <br/>
                    * 휴일 : {item.holiday} <br/>
                    * 주소 : {item.address} <br/>
                    * 연락처 : {item.call_number} <br/>
                    * 특징 : {item.features} <br/>
                </SpaceExplain>
            </SpaceContent>
        </SpaceItemBlock>
    );

}

const SpaceListViewer = ({list, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <>
            <ContentHeader>우리 동네 터 찾기</ContentHeader>
            <Introduction>
                우리 동네 혹은 인근에서 이용할 수 있는 품앗이 터를 찾아보아요!
            </Introduction>

            <ContentTemplate>
                {!loading && list && (
                    <div>
                        {list.data.map(item => (
                            <SpaceItem item={item} key={item.playground_id} />
                        ))}
                    </div>
                )}
            </ContentTemplate>
        </>
    );
};

export default SpaceListViewer;

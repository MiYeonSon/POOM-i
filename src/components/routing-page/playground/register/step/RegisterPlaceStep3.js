import React from 'react';
import styled from "styled-components";
import {ContentHeader} from "../../../../common/StyledHeader";
import ContentTemplate from "../../../../common/layout/ContentTemplate";
import FromCongrats from '../../assets/formCongratus.png';

const CongratsImg = styled.img`
  box-sizing: border-box;
  display: block;
  margin: 0vw auto;
  padding: 0vw;
  width: 40vw;
  height: fit-content;
`;

const ContentBlock = styled.div`
  box-sizing: border-box;
  margin: 3vw auto;
  width: 100%;
  font-family: paybooc-Medium;
  font-size: 1vw;
  font-weight: 300;
  line-height: 1.7vw;
  letter-spacing: 0.05vw;
`;


const RegisterPlaceStep3 = () => {
    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 03</ContentHeader>
            <ContentTemplate>
                <CongratsImg src={FromCongrats} alt={'폼등록 축하 메시지'} />
                <ContentBlock>
                    <p>
                        폼 제작을 완료하였습니다! &nbsp; 폼은 관리자의 주소 인증 승인 후 배포할 수 있습니다.
                    </p>

                    <p>
                        주소 인증 승인 이후, <br/>
                        * <b>마이페이지 - 품앗이 터 등록 폼 관리하기 메뉴</b>에서  배포 폼 링크를 확인하실 수 있습니다. <br/>
                        * POOM-i 회원이 아닌 거주민을 위한 안내문을 출력하실 수 있습니다. <br/>
                        본 안내문은 출력하여 단지 내 배포용으로 사용할 수 있으며, 폼 링크 및 QR 코드를 제공하여 쉽게 투표에 참여할 수
                        있습니다.
                    </p>

                    <p>
                        <b>[ 배포 시 주의 사항 안내 ]</b> <br/>
                        * POOM-i 회원이 아닌 거주민을 위한 별도의 안내 서비스는 운영되지 않고 있습니다. <br/>
                        반드시 아파트 단지 내 안내문 배포/방송/비상 연락망을 통해 투표 참여를 독려해주시기 바랍니다. <br/>
                        단, 링크 혹은 QR 코드를 통해 투표한 결과에 대해서는 집계되고 있으며, 실시간으로 확인하실 수 있습니다. <br/>

                    </p>
                </ContentBlock>
            </ContentTemplate>

        </>
    );
};

export default RegisterPlaceStep3;

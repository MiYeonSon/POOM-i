import React from 'react';
import Introduction from "../../common/Introduction";
import {ContentHeader, ContentMiddleHeader, ContentSmallHeader} from "../../common/StyledHeader";

const RegisterPlaceStep0 = () => {
    return (
        <>
            <ContentHeader>품앗이 터 등록하기</ContentHeader>
            <Introduction>
                아파트 내 비어있는 공용 공간이 많이 아쉬우신가요? <br/>
                공용 공간 사용에 대한 아파트 입주민들의 동의서 제작 및 배포 후 품앗이 공간으로 활용해보세요!
            </Introduction>

            <ContentMiddleHeader color={"#4E7093"}>
                [ 품앗이 터 등록하는 방법 ]
            </ContentMiddleHeader>
            <ContentSmallHeader>
                * 동의서 제작
            </ContentSmallHeader>
            <ol>
                <li>지도와 현재 거주중인 건물과 일치하는지 확인</li>
                <li>거주사실 인증하기</li>
                <li>공용 공간 희망 장소(최소 2장), 상세 위치 설명</li>
                <li>동의 서 작성</li>
            </ol>

            <ContentSmallHeader>
                * 동의서 배포
            </ContentSmallHeader>

            <ol>
                <li>거주 내 POOM-i 회원에게 공용 공간 사용에 대한 찬반 투표 참여 이메일 전송</li>
                <li>거주 내 POOM-i 회원이 아닌 입주자의 경우 아파트 내의 비상 연락망으로 찬반 투표 링크 전송</li>
            </ol>

            <ContentSmallHeader>
                * 투표 관리
            </ContentSmallHeader>
            <ul>
                <li>투표 상황을 실시간으로 확인할 수 있습니다.</li>
                <li>세대 별 투표 여부를 확인할 수 있으나, 어떤 항목에 투표했는지는 알 수 없습니다.</li>
                <li>미 투표 세대에게 추가 이메일 전송 및 링크 정송을 통해 투표 참여를 독려할 수 있습니다.</li>
            </ul>

            <ContentSmallHeader>
                * 주의 사항
            </ContentSmallHeader>
            <ol>
                <li>현재 서비스는 공용시설 이용에 대한 투표 진행의편의성을 제공하기 위한 서비스입니다.</li>
                <li>건물 내 공용 시설 이용에 대한 수틱이 있을 경우 이 수칙을 주수하도록 합니다.</li>
                <li>해당 서비스는 입주민에 대한 강제성을 POOM-i가 강요하지 않습니다.</li>
                <li>사진 텀부 시 문제가 발생할 수 있는 사안(불법, 저작권 위반 등)은 POOM-i가 책임지지 않습니다.</li>
                <li>거주 중인 건물의 공용 시설에 대한 이용 수칙을 POOM-i 고객센터로 전달할 경우 서비스 개선에 활용될 수 있습니다.</li>
            </ol>

        </>
    );
};

export default RegisterPlaceStep0;

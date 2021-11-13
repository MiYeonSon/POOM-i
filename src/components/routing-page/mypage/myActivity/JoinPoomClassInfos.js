import React from 'react';
import styled from 'styled-components';
import {BsFillPersonFill} from "react-icons/bs";
import {CommonHr} from "../../../common/styling/StyledTag";

const ClassInfoBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin-top: 2vw;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassTextInfoBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0.8vw;

  font-size: 0.8vw;
  font-weight: 300;
  line-height: 1.1vw;
  
`;

const ClassImg = styled.img`
  box-sizing: border-box;
  width: 40%;
  height: 30%;
`;

const ClassIntroduction = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8vw;
`;

const UserInfoBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;

  text-align: center;
`;

const UserSayBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 1vw;
  
  font-weight: 300;
  line-height: 1vw;
`;

const JoinPoomClassInfo = ({classInfo}) => {
    const {
        writer,
        group_name,
        regular_meeting_day,
        main_activity,
        including_members,
        profile_image_uri,
        created_at,
        description
    } = classInfo.data;

    return (
        <>
            <ClassInfoBlock>
                <ClassImg src={profile_image_uri} alt={'품앗이 반 사진'}/>
                <ClassTextInfoBlock>
                    <div style={{marginBottom : '0.5vw', fontSize : '1.2vw', fontWeight : '700'}}>
                        {group_name}
                    </div>
                    <div>
                        * 품앗이 개설일 : {created_at} <br/>
                        * 정기 모임일 : {regular_meeting_day} <br/>
                        * 주요 활동 : {main_activity} <br/>
                        * 구성 가족 수 : {including_members} <br/>
                    </div>
                </ClassTextInfoBlock>
            </ClassInfoBlock>

            <CommonHr margin={'2vw 0 1vw'}/>

            <ClassIntroduction>
                <UserInfoBlock>
                    <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                        padding: '0.2vw',
                        boxSizing: 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                    <div style={{marginTop : '0.5vw', fontSize : '1vw', fontWeight: '700'}}>{writer}</div>
                </UserInfoBlock>

                <UserSayBlock dangerouslySetInnerHTML={{__html: description}}/>
            </ClassIntroduction>
        </>
    );
}

const JoinPoomClassInfos = ({classInfo, loading, error}) => {
    if (error) {
        return (<div>에러 발생</div>);
    }

    return (
        <>
            {!loading && classInfo && <JoinPoomClassInfo classInfo={classInfo}/>}
        </>
    );
};

export default JoinPoomClassInfos;

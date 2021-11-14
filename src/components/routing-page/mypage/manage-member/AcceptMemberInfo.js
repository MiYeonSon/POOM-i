import React from 'react';
import styled from 'styled-components';
import {BsFillPersonFill} from "react-icons/bs";



const MemberTemplate = styled.div`
`;

const MemberBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 1vw;
  padding: 1.5vw 3vw;
  width: 100%;
  display: flex;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;
`;


const MemberInfo = ({member}) => {
    const {name, email, nick, gender, age, phone_number} = member.member_info;



    return (
        <MemberBlock>
            <BsFillPersonFill size={'3vw'} color={'#8E8E8E'} style={{
                boxSizing: 'border-box',
                margin: '0 0.8vw 0 0',
                border: '1.5px solid gray',
                borderRadius: '100%'
            }}/>

            {name}
            {email}
            {nick}
            {gender}
            {age}
            {phone_number}
        </MemberBlock>
    )
};

const AcceptMemberInfo = ({members, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <div>
            {!loading && members && (
                <div>
                    {
                        members.data.map(member => (
                            <MemberInfo member={member} key={member.member_info.id}/>
                        ))
                    }
                </div>
            )
            }
        </div>
    );
};

export default AcceptMemberInfo;

import React from 'react';
import styled from 'styled-components';



const MemberTemplate = styled.div`
`;

const MemberBlock = styled.div``;


const MemberInfo = ({member}) => {
    const {name, email, nick, gender, age, phone_number} = member.member_info;



    return (
        <div>
            {name}
            test
        </div>
    )
};

const ApplyMemberInfo = ({members, error, loading}) => {
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

export default ApplyMemberInfo;

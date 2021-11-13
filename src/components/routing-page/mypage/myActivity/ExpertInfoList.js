import React from 'react';
import styled from 'styled-components';
import {NoListGrayComment} from "../../../common/NoListComment";

const ListTemplate = styled.div`
  margin: 0 0 6vw;
  width: 100%;
`;

const ListItemBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 1.5vw;
  padding: 1.5vw 3vw;
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

const ListItemHeader = styled.div`
  margin-bottom: 0.6vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.2vw;
  font-weight: 700;
`;


const ExpertInfoItem = ({expert}) => {
    const {contents, start_time, end_time, parent_nick, child_name, child_birthday} = expert;


    return (
        <ListItemBlock>
            <ListItemHeader>
                test
            </ListItemHeader>
        </ListItemBlock>
    )

}

const ExpertInFoList = ({list, loading, error}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <ListTemplate>
            {!loading && list && (
                list.data.expert_info.length === 0 ? (
                    <NoListGrayComment>제공 중인 품앗이가 없습니다.</NoListGrayComment>
                ) : (
                    <div style={{margin: "1vw 0"}}>
                        {list.data.expert_info.map(expert => (
                                <ExpertInfoItem expert={expert} key={expert.expert_id}/>
                            )
                        )}
                    </div>

                )
            )
            }
        </ListTemplate>
    );
};

export default ExpertInFoList;

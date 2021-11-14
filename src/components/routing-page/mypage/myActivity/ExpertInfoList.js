import React, {useState} from 'react';
import styled from 'styled-components';
import {NoListGrayComment} from "../../../common/NoListComment";
import {BsTriangleFill} from "react-icons/bs";

const ListTemplate = styled.div`
  margin: 0 0 6vw;
  width: 100%;
`;

const ListItemTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
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

const ListItemBlock = styled.div`
  box-sizing: border-box;
  padding: 1.5vw 3vw;
  width: 100%;
  display: flex;
`;

const ListItemHeader = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 1.6vw;
  font-size: 1.2vw;
  font-weight: 700;
  
  cursor: pointer;
`;

const PoomContent = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin-left: 6vw;
  font-size: 1.2vw;
  font-weight: 700;
`;

const TextBlock = styled.div`
  box-sizing: border-box;
  margin: 0.7vw 1.5vw;
  padding: 0.5vw;
  font-size: 1vw;
  font-weight: 400;
  background-color: #F5F5F5;
`;

const ExpertInfoItem = ({expert}) => {
    const {contents, start_time, end_time, parent_nick, child_name, child_birthday} = expert;

    const [click, setClick] = useState(false);

    return (
        <ListItemTemplate>
            <ListItemBlock>
                <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}
                                style={{margin: '1vw 2vw 0 0'}}/>
                <ListItemHeader onClick={() => setClick(!click)}>
                    * &nbsp; 보호자명 : {parent_nick} ({child_name} - {child_birthday} )<br/>
                    * &nbsp; 활동 시간 : {start_time} ~ {end_time} <br/>
                </ListItemHeader>
            </ListItemBlock>

            {click && (
                <PoomContent>
                    * &nbsp; 원글
                    <TextBlock dangerouslySetInnerHTML={{__html: contents}}/>
                </PoomContent>
            )}
        </ListItemTemplate>

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

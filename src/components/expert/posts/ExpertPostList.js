import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";
import {setOriginalPost, updatePost} from "../../../modules/expertWrite";
import {removePost} from "../../../lib/api/expertPosts";
import SubInfo from "../../common/imsi/SubInfo";
import ExpertPostActionButtons from "../post/ExpertPostActionButtons";
import NewPostInput from "../NewPostInput";

const ExpertPostListBlock = styled.div`
  margin-top: 3rem;
`;

const ExpertPostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid gray;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;

    &:hover {
      color: dimgray;
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const ExpertPostContent = styled.div`
  font-size: 1.3125rem;
  color: black;
  border: 1px solid gray;
  height: fit-content;
`;


const ExpertPostItem = ({expertPost}) => {
    const {created_at, writer, contents, writer_score, recruit_type, expert_id, start_date, start_time, end_date, end_time} = expertPost;
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(setOriginalPost(expertPost));
    }

    const onRemove = async () => {
        try {
            await removePost(expert_id);
            window.location.reload()
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <ExpertPostItemBlock>
                <h2>post ID : {expert_id}</h2>

                <ExpertPostActionButtons onEdit={onEdit} onRemove={onRemove}/>
                <SubInfo username={writer} publishedDate={new Date(created_at)}/>
                품앗이 점수 : {writer_score}
                <br/>
                카테고리 : {recruit_type}
                <br/>
                품앗이 시간 : {`${start_date} ${start_time} ~ ${end_date } ${end_time}`}
                <ExpertPostContent dangerouslySetInnerHTML={{__html: contents}}/>
            </ExpertPostItemBlock>
        </>
    );
};


const ExpertPostList = ({expertPosts, loading, error, showWriteButton}) => {
    if (error) {
        return <ExpertPostListBlock>에러 발생</ExpertPostListBlock>
    }


    return (
        <ExpertPostListBlock>
            {!loading && expertPosts && (
                <div>
                    {expertPosts.data.slice(0).reverse().map(expertPost => (
                        <ExpertPostItem expertPost={expertPost} key={expertPost.expert_id} />
                    ))}

                </div>
            )}

        </ExpertPostListBlock>

    );
};

export default withRouter(ExpertPostList);
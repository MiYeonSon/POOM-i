import React from 'react';

const CommentClassPostItem = ({post}) => {
    const {contents} = post;
    return (
        <div style={{border : '1px solid red'}}>
            {contents}
        </div>
    )
}

const CommentClassPostList = ({posts, loading, error, showWriteButton}) => {
    if(error) {
        return <div>에러 발생</div>
    }

    return (
        <div>
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <CommentClassPostItem post={post} key={post.comment_id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentClassPostList;

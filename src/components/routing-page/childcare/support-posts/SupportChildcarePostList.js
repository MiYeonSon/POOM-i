import React from 'react';

const SupportChildcarePostItem = ({post}) => {
    const {applier, contents} = post;

    return(
        <div>{contents}</div>
    )
}

const SupportChildcarePostList = ({posts, loading, error, showWriteButton}) => {
    if (error) {
        return <div>에러가 발생했습니다.</div>
    }

    return (
        <div>
            {!loading && posts && (
                <div>
                    {posts.data.map(post => (
                        <SupportChildcarePostItem post={post} key={post.apply_id}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SupportChildcarePostList;

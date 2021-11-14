import React from 'react';

const FormInfo = ({form}) => {
    return (
        <div>test</div>
    );
}

const AcceptFormInfo = ({members, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <>
            {!loading && members && (
                <div>
                    {
                        members.data.map(form => (
                            <FormInfo form={form.residence_info} key={form.residence_info.id} />
                        ))
                    }
                </div>
            )}
        </>
    );
};

export default AcceptFormInfo;

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const quiz = useLoaderData();
    const data = quiz.data;
    console.log(data);
    return (
        <div>
            <h2>This is Topics:{data.length}</h2>
        </div>
    );
};

export default Topics;
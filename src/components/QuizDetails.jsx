import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const QuizDetails = useLoaderData()
    return (
        <div>
            <h2>This is Details</h2>
        </div>
    );
};

export default QuizDetails;
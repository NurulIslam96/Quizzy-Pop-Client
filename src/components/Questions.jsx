import React from 'react';

const Questions = ({qs}) => {
    const {question} = qs
    return (
        <div className='text-center'>
            <p>Quiz Ques: {question}</p>
        </div>
    );
};

export default Questions;
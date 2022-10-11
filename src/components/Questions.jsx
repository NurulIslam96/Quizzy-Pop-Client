import React from 'react';

const Questions = ({qs}) => {
    const {question, options, correctAnswer} = qs
    console.log(qs);
    return (
        <div className='text-center'>
            <p>Quiz Ques: {question}</p>
            <div className=''>
                {
                    options.map(option => <div className="topping">
                    <input type="checkbox" id="topping" name="topping" value={option} />{option}
                  </div>
                )
                }
            </div>
        </div>
    );
};

export default Questions;
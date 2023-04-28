import React, { useEffect, useState } from 'react';
import Option from '../../Option/Option';

const Question = ({ quizQuestion, questionIndex, total, setResult}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);

    useEffect(()=> {
        setSelectedOption(null);
        setSelectedOption(null);
    },[questionIndex]);

    const { question, options, correctAnswer} = quizQuestion;
   
    const handleToCheckOption = (option) => {
        setCorrectOption(correctAnswer);
        if(option === correctAnswer) {
            setResult((previous) => previous + 1);
            setSelectedOption(option);
        } else {
            setSelectedOption(option);
        }
    }

    return (
        <div>
            <h2 className="text-2xl mb-4 text-center"><span className="font-medium">{questionIndex + 1}</span> of <span className="font-medium">{total}</span></h2>
            <h2 className="text-2xl font-medium my-2">Question:</h2>
            <p className="text-xl font-medium">{question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 my-8">
                {
                    options.map((option, index) => <Option correctOption={correctOption} selectedOption={selectedOption} key={index} handleToCheckOption={handleToCheckOption} option={option}/>)
                }
            </div>
        </div>
    );
};

export default Question;
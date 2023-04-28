import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const QuizTopic = ({quizTopic}) => {
    const {id, name, logo} = quizTopic;
    const navigate = useNavigate();
    const handleToNavigate = (id) => {
        navigate(`/quiz/${id}`)
    }
    
    return (
        <div className="p-3 shadow-lg">
            <div className="bg-gray-200">
                <img className="w-full" src={logo} alt="" />
            </div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="text-xl font-medium text-blue-500">{name}</h3>
                <button onClick={() => handleToNavigate(id)} className="bg-blue-500 text-white text-lg font-semibold py-2 px-5 rounded-lg flex items-center">Start Practice <ArrowSmallRightIcon className="h-6 w-6"/></button>
            </div>
        </div>
    );
};

export default QuizTopic;
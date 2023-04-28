import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../../Option/Option';
import ProgressBar from '../ProgressBar/ProgressBar';
import Question from '../Question/Question';
import Result from '../Result/Result';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [progression, setProgression] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (questionIndex === 0) {
            setResult(0);
            setProgression(100 / total);
        }
        else if (questionIndex < total) {
            setProgression((previous) => previous + 100 / total);
        }
    }, [questionIndex]);

    const { data } = useLoaderData();
    const { total, name, questions, id } = data;

    const showToastMessage = (answer) => {
        toast.success(answer, {
            position: toast.POSITION.TOP_CENTER
        });
        if(questionIndex < total) {
            setQuestionIndex((prev) => prev + 1);
        }   
    }

    return (
        questionIndex < total ?
            <div className="p-4 relative">
                <div className="flex justify-center">
                    <h2 className="text-2xl font-medium text-blue-500 my-8">Quiz of {name}</h2>
                </div>
                <div className="relative md:w-4/5 lg:w-4/5 xl:w-2/4 mx-auto shadow-md border-2 px-10 py-5">
                    <EyeIcon onClick={() => showToastMessage(questions[questionIndex].correctAnswer)}  className="h-6 w-6 text-gray-600 hover:text-black absolute top-4 right-4 cursor-pointer"></EyeIcon>
                    <ToastContainer/>
                    <ProgressBar progression={progression} />
                    <Question total={total} setResult={setResult} questionIndex={questionIndex} quizQuestion={questions[questionIndex]} />
                    <hr />
                    <div className="flex justify-end my-8">
                        <button onClick={() => setQuestionIndex((previousIndex) => previousIndex + 1)} className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg">{`${questionIndex + 1 < total ? 'Next' : 'Finish'}`}</button>
                    </div>
                </div>
                <div>
                </div>
            </div> :
            <Result result={result} total={total} setQuestionIndex={setQuestionIndex}></Result>
    );
};

export default Quiz;
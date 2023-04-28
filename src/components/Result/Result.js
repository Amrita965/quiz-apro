import React from 'react';

const Result = ({setQuestionIndex, total, result}) => {
    console.log(result);
    return (
        <div className="flex justify-center pt-40">
            <div className="text-center">
                <h2 className="text-3xl font-medium py-1">Result: {parseInt((result * 100 / total).toFixed(2))}%</h2>
                <p className="py-1 font-medium">Selected {result} correct options out of {total} questions.</p>
                <button onClick={() => setQuestionIndex(0)} className="bg-blue-500 px-8 py-2 text-white rounded-lg">Retry</button>
            </div>
        </div>
    );
};

export default Result;
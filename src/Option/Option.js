import React from 'react';

const Option = ({ option, handleToCheckOption, selectedOption, correctOption }) => {
    return (
        <div>
            <button disabled={`${selectedOption ? "disabled" : ""}`} onClick={() => handleToCheckOption(option)} className={`block w-full mouse-pointer border-2 text-lg rounded-lg py-2 px-4 ${option === correctOption ? "bg-green-500 text-white" : selectedOption === option ? "bg-red-500 text-white" : ""}`}>{option}</button>
        </div>
    );
};

export default Option;
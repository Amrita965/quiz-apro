import React from 'react';

const ProgressBar = ({progression}) => {
    return (
        <div className="absolute w-full top-0 left-0 bg-gray-300 h-2">
            <div style={{ width: `${progression}%` }} className="h-2 bg-blue-400 transition-[width] ease-in-out duration-1000"></div>
        </div>
    );
};

export default ProgressBar;
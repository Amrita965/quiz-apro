import React from 'react';
import logo from '../../images/logo.png'

const Banner = () => {
    return (
        <div className="mt-10">
            <img src={logo} alt="" className="w-48 mx-auto animate-pulse" />
        </div>
    );
};

export default Banner;
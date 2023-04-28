import React from 'react';
import img from '../../images/kisspng-http-404-service-book-printing-404-5b1fd8120ae731.2431793815288135860447.png'
import { useNavigate } from 'react-router-dom';

const FourZeroFourError = () => {

    const navigate = useNavigate();

    const handleToNavigate = () => {
        navigate('/');
    }
    
    return (
        <div className="h-screen flex justify-center items-center text-center text-orange-500 text-lg font-semibold">
            <div>
                <div className="flex justify-center">
                    <img className="h-56 w-" src={img} alt="" />
                </div>
                <p>We're sorry</p>
                <p>The page you were looking for doesn't exit anymore.</p>
                <button onClick={handleToNavigate} className="border-2 border-orange-500 py-1 px-5 rounded-2xl my-2 hover:bg-orange-500 hover:text-white">Back to Home</button>
            </div>
        </div>
    );
};

export default FourZeroFourError;
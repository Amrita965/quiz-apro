import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = ({children}) => {
    const { data } = useLoaderData();
    return (
        <div>
            {children}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-4 md:px-12 lg:px-8 2xl:px-24">
                {
                    data.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}/>)
                }
            </div>
        </div>
    );
};

export default Home;
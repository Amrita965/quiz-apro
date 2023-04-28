
const getQuizTopics = () => fetch("https://openapi.programming-hero.com/api/quiz");

const getTopicDetailsById = ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);

export {getQuizTopics, getTopicDetailsById};
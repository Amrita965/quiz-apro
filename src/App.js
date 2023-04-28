import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Banner from './components/Banner/Banner';
import { getQuizTopics, getTopicDetailsById } from './loadData/loadData';
import Quiz from './components/Quiz/Quiz';
import FourZeroFourError from './components/FourZeroFourError/FourZeroFourError';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home><Banner/></Home>,
          loader: getQuizTopics,
        },
        {
          path: '/topics',
          element: <Topics/>,
          loader: getQuizTopics,
        },
        {
          path: '/quiz/:id',
          element: <Quiz/>,
          loader: getTopicDetailsById,
        },
        {
          path: '/statistics',
          element: <Statistics/>,
          loader: getQuizTopics,
        }
      ],
    },
    {
      path: '*',
      element: <FourZeroFourError/>
    }

  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

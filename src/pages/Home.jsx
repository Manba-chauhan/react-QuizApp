import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
       <Link to="/quiz" className='bg-blue-200'>Start Quiz</Link>
    </div>
  );
}

export default Home;

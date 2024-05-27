import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-blue-200  w-full">
      <div className="w-1/2 mx-auto text-center py-80 p-4">
        <Link to="/quiz">
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

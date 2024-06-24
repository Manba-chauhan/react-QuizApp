import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto text-center h-screen flex items-center justify-center">
        <Link to="/quiz">
          <button className="bg-gradient-to-r from-green-400 text-xl to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

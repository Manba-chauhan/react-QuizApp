import React from "react";
import { useLocation, Link } from "react-router-dom";

const Score = () => {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-black w-full h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl p-8 md:p-14 rounded-lg max-w-lg mx-4 md:mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">
          Thank You for Completing the Quiz!
        </h1>
        <p className="text-xl mb-4">Your Score: {score}%</p>
        <Link to="/">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:from-green-500 hover:to-green-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Score;

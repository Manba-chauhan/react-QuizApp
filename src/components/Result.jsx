import React, { useEffect, useState } from "react";
import quiz from "../api/Quiz";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [currentQues, setcurrentQues] = useState(0);
  const [selectAns, SetselectAns] = useState(null);
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isExist = answer.find((ans) => ans.qid === quiz[currentQues].id);
    if (isExist) {
      SetselectAns(isExist.optionId);
    } else {
      SetselectAns(null);
    }
  }, [answer, currentQues]);

  const handleOptionChange = (qid, optionId) => {
    SetselectAns(optionId);
    setAnswer((prev) => {
      const isExist = prev.find((ans) => ans.qid === qid);
      if (isExist) {
        return prev.map((ans) => {
          if (ans.qid === qid) {
            return { ...ans, optionId };
          } else {
            return ans;
          }
        });
      } else {
        return [...prev, { qid, optionId }];
      }
    });
  };

  const handlePreviosQues = () => {
    setcurrentQues((prev) => prev - 1);
    SetselectAns(null);
  };

  const handleSubmitQuiz = () => {
    setcurrentQues((prev) => prev + 1);
  };

  const calculateScore = () => {
    let correctans = quiz.filter((q) => {
      const answers = answer.find((ans) => ans.qid === q.id);
      return answers && answers.optionId === q.answer;
    }).length;

    const score = ((correctans / quiz.length) * 100).toFixed(2);

    navigate("/score", { state: { score: score } });
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black w-full h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl p-8 md:p-14 rounded-lg max-w-lg mx-4 md:mx-auto">
        <div>
          <h1 className="text-2xl font-bold mb-6">
            <span>{quiz[currentQues].id}) </span>
            {quiz[currentQues].question}
          </h1>
        </div>
        <div className="mt-2 p-2">
          <div className="flex flex-col space-y-4">
            {quiz[currentQues].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${quiz[currentQues].id}`}
                  value={option.id}
                  checked={selectAns === option.id}
                  onChange={() =>
                    handleOptionChange(quiz[currentQues].id, option.id)
                  }
                />
                <label className="text-lg">{option.option}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            disabled={currentQues === 0}
            className={`px-6 py-2 rounded-full shadow-lg transition-all duration-300 ${
              currentQues === 0
                ? "bg-gray-400 text-gray-700"
                : "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700"
            }`}
            onClick={handlePreviosQues}
          >
            Prev
          </button>
          {quiz[currentQues].id === quiz.length ? (
            <button
              disabled={selectAns === null}
              className={`px-6 py-2 rounded-full shadow-lg transition-all duration-300 ${
                selectAns === null
                  ? "bg-gray-400 text-gray-700"
                  : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
              }`}
              onClick={calculateScore}
            >
              Submit
            </button>
          ) : (
            <button
              className={`px-6 py-2 rounded-full shadow-lg transition-all duration-300 ${
                selectAns === null
                  ? "bg-gray-400 text-gray-700"
                  : "bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"
              }`}
              onClick={handleSubmitQuiz}
              disabled={selectAns === null}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;

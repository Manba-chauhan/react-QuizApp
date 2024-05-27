import React, { useEffect, useState } from "react";
import quiz from "../api/Quiz";
import { Link } from "react-router-dom";

const Result = () => {
  const [currentQues, setcurrentQues] = useState(0);
  const [selectAns, SetselectAns] = useState(null);
 
  const [answer, setAnswer] = useState([]);


  useEffect(()=>{
    //  find existing questioon

    const isExist = answer.find((ans) => ans.qid === quiz[currentQues].id);
    if (isExist) {
      SetselectAns(isExist.optionId);
    } else {
      SetselectAns(null);
    }
  },[answer, currentQues])
  const handleOptionChange = (qid, optionId) => {
    SetselectAns(optionId);
    console.log("qid", qid);

    setAnswer((prev)=>{
      console.log("prev", prev);
      // console.log("retrun", [...prev, { qid, optionId }]);    
      const isExist = prev.find((ans) => ans.qid === qid);
       console.log("isExist", isExist);
      if (isExist) {
         return prev.map((ans)=>{
            if(ans.qid===qid){
              return {
                 ...ans,
               optionId
              }
              
            }
            else{
              return ans;
            }
         })
        
      }
      else{
        return [...prev, { qid, optionId }];
        // console.log("ans2", prev);
      }
    
       
    })
    // SetselectAns(optionId);
  }
  const handlePreviosQues = () => {

   
    setcurrentQues((prev) => prev - 1);
    SetselectAns(null);

  }

  const handleSubmitQuiz = () => {
    setcurrentQues((prev) => prev + 1);
    // SetselectAns(null);

  }
   

  const calculateScore = () => {
           
     let correctans=quiz.filter((q)=>{
      const answers=answer.find((ans)=> ans.qid===q.id)
         
      console.log("quest",answers)
     
        const result=  answers && answers.optionId === q.answer
       
        console.log("answer",answer )
        console.log("result ",result)
        return result;

     
     
          
     }).length;
    console.log("Corect ans ", correctans);
     const score=((correctans/quiz.length )* 100).toFixed(2);

     alert(`Total Percentage is : ${score} % `)
     console.log("Total Score ",score)
     
   

  }


  return (
    <div className="bg-blue-200 text-black w-full h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-14 rounded-lg max-w-[500px] ">
        <div className="">
          <h1 className="text-xl font-bold">
            {" "}
            <span>{quiz[currentQues].id} ) &nbsp;</span>
            {quiz[currentQues].question}
          </h1>
        </div>
        <div className="mt-2 p-2">
          <div className="flex flex-col">
            <div>
              {quiz[currentQues].options.map((option, index) => {
                return (
                  <div key={index}>
                    <input
                      // checked={selectedAnswerIndex === index}
                      // checked={index}
                      type="radio"
                      name={`question-$quiz[currentQues].id`}
                      value={option.id}
                      checked={selectAns === option.id }
                      onChange={() =>
                        handleOptionChange(quiz[currentQues].id, option.id)
                      }
                    />
                    <label>{option.option}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            disabled={currentQues === 0 }
            className="bg-blue-500 text-white px-8 py-2 rounded-full"
            onClick={handlePreviosQues}
            type="submit"
          >
            Prev
          </button>
          {quiz[currentQues].id === quiz.length ? (
            <Link to="/score">
              <button
                disabled={selectAns === null}
                className="bg-blue-500 text-white px-8 py-2 rounded-full"
                onClick={ calculateScore}
                // onClick={handleSubmitQuiz}
                type="submit"
              >
                Submit
              </button>
            </Link>
          ) : (
            <button
              className="bg-blue-500 text-white px-8 py-2  rounded-full"
              onClick={handleSubmitQuiz}
              disabled={selectAns === null}
            >
              Next
            </button>
          )}

      
        </div>
      </div>
    </div>
  )
}

export default Result;

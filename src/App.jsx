import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
// import Ques from './components/Ques';
import Score from './components/Score';
import Result from './components/Result';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Result/>}></Route>
          <Route path="/score" element={<Score />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import College from './components/College/College';
import Student from './components/Student/Student';

function App() {
  let collegeId = 1;
  const getCollegeId = (data) => {
    collegeId = data;
  };
  return (
    <div className='App'>
      <College onClick={getCollegeId} />
      <Student college_id={collegeId} />
    </div>
  );
}

export default App;

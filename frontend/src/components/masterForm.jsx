import React from 'react';
import questionsList from './questionsList.js';
import Step1 from './steps/step1.jsx';
import Step2 from './steps/step2.jsx';
import Step3 from './steps/step3.jsx';
import Step4 from './steps/step4.jsx';
import Step5 from './steps/step5.jsx';
import Step6 from './steps/step6.jsx';
import Step7 from './steps/step7.jsx';
import Step8 from './steps/step8.jsx';
import Step9 from './steps/step9.jsx';
import Step10 from './steps/step10.jsx';
import Step11 from './steps/step11.jsx';
import { Container } from '@material-ui/core';

const MasterForm = ({form, setForm, showResults}) => {

  const handleButtonClick = (value, step) => {
    let newObj = {...form};
    newObj[step] = value;
    setForm(newObj);
  };

  return (
    <>
    <Container maxWidth="md">
      <div className="question">
        <Step1 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step2 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step3 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step4 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step5 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step6 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step7 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step8 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step9 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step10 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      <div className="question">
        <Step11 questions={questionsList} clickHandler={handleButtonClick}/>
      </div>
      </Container>
    </>
  );
}

export default MasterForm;

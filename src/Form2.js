import axios from "axios";
import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { useGlobalContext } from "./context";

function Form2() {
  const {
    sections,
    QuestionData,
    quiz,
    timer,
    timerType,
    time,
    setSections,
    sectionOpen,
  } = useGlobalContext();
  const [questions, setQuestions] = useState([]);
  const [finalValues, setFinalValues] = useState({
    quiz_name: quiz,
    quiz_timer: timer,
    quiz_timer_type: timerType,
    quiz_timer_time: time,
    quiz_have_sections: sectionOpen,
    quiz_sections_info: sections,
    quiz_questions: "",
  });
  const [checkId, setCheckId] = useState(0);

  let SelectSection = "";

  const selectQuestion = (e, item) => {
    if (e.currentTarget.checked) {
      // const filterItems = QuestionData.filter((item) => item.id === id);
      setQuestions([
        ...questions,
        {
          question_id: item.id,
          sectionName: "",
        },
      ]);
    } else {
      const filterItems = questions.filter(
        (question) => question.question_id !== item.id
      );
      setQuestions(filterItems);
    }
  };

  useEffect(() => {
    setFinalValues({ ...finalValues, quiz_questions: questions });
    sections[checkId].question_bank = questions;
  }, [questions]);

  const handleSubmit = async () => {
    console.log(finalValues);
    try {
      const result = await axios.post(
        "http://localhost:5003/create",
        finalValues
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestion = (index) => {
    setCheckId(index);
  };

  return (
    <div className="form-container">
      <div className="assign-btn-container">
        {/* <button className="assign-btn assign-btn-active">Section 1</button>
        <button className="assign-btn">Section 2</button> */}
        {sections.map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                index === checkId
                  ? "assign-btn assign-btn-active"
                  : "assign-btn"
              }`}
              onClick={() => handleQuestion(index)}
            >
              {item.name ? item.name : null}
            </button>
          );
        })}
      </div>
      {QuestionData && (
        <div className="drop-down-container">
          <select className="drop-down">
            {QuestionData.map((item, index) => {
              return <option key={item.id}>{item.Tags1}</option>;
            })}
          </select>
          <select className="drop-down">
            {QuestionData.map((item, index) => {
              return <option key={item.id}>{item.Tags2}</option>;
            })}
          </select>
        </div>
      )}
      {QuestionData && (
        <div className="questions-assign-container">
          {QuestionData.map((item, index) => {
            return (
              <div className="question-assign" key={item.id}>
                <label class="checkbox-container">
                  <input
                    type="checkbox"
                    value={item.id}
                    onChange={(e) => selectQuestion(e, item)}
                  />
                  <span class="checkmark"></span>
                </label>
                <h4>{item.Tags1}</h4>
                <h4>{item.Tags2}</h4>
                <p>{item.Question}</p>
              </div>
            );
          })}
          {/* <div className="question-assign">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div>
        <div className="question-assign">
          <label class="checkbox-container">
            <input
              type="checkbox"
              value="12"
              ref={Ref}
              onChange={(e) => setQuestionID(e.target.value)}
            />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div>
        <div className="question-assign">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div> */}
        </div>
      )}
      {QuestionData && (
        <button className="next-btn" onClick={handleSubmit}>
          SHARE
        </button>
      )}
    </div>
  );
}

export default Form2;

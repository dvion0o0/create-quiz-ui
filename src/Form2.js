import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { useGlobalContext } from "./context";
import QuestionData from "./questionData";

function Form2() {
  const { sections, setSections } = useGlobalContext();
  const [questions, setQuestions] = useState([]);
  // const [questionID, setQuestionID] = useState("");

  // const Ref = useRef(null);
  // console.log(questionID);

  const selectQuestion = (e, item) => {
    if (e.currentTarget.checked) {
      // const filterItems = QuestionData.filter((item) => item.id === id);
      setQuestions([
        ...questions,
        {
          id: item.id,
          Tags1: item.Tags1,
          Tags2: item.Tags2,
          Question: item.Question,
        },
      ]);
    } else {
      const filterItems = questions.filter(
        (question) => question.id !== item.id
      );
      setQuestions(filterItems);
    }
  };

  return (
    <div className="form-container">
      <div className="assign-btn-container">
        {/* <button className="assign-btn assign-btn-active">Section 1</button>
        <button className="assign-btn">Section 2</button> */}
        {sections.map((item, index) => {
          return (
            <button key={index} className="assign-btn">
              {item.name ? item.name : null}
            </button>
          );
        })}
      </div>
      <div className="drop-down-container">
        <select className="drop-down">
          <option>lorem ipsn</option>
        </select>
        <select className="drop-down">
          <option>lorem ipsn</option>
        </select>
      </div>
      <div className="questions-assign-container">
        {QuestionData.map((item, index) => {
          return (
            <div className="question-assign">
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
      <button className="next-btn">SHARE</button>
    </div>
  );
}

export default Form2;

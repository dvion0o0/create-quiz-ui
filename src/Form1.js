import React, { useState, useRef, useEffect } from "react";
import btnData from "./btnsData";
import { Link } from "react-router-dom";
function Form1() {
  const [timer, setTimer] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [sections, setSections] = useState([]);
  const [quiz, setQuiz] = useState("");
  const [selectQuestion, setSelectQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [changeID, setChangeID] = useState(0);

  const handleChange = () => {
    if (sectionName) {
      setSections([...sections, sectionName]);
    }
  };

  console.log(sections);

  const Ref = useRef(null);

  // useEffect(() => {
  //   if (timer) {
  //     Ref.current.disabled = false;
  //     console.log(Ref);
  //   } else {
  //     Ref.current.disabled = true;
  //   }
  // }, [timer]);

  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor="quiz-name">Name of Quiz</label>
        <input
          type="text"
          name="quiz-name"
          className="form-input"
          onChange={(e) => setQuiz(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Timer</label>
        <div className="btn-container">
          <button
            className={`${timer ? "timer-btn timer-active" : "timer-btn"}`}
            onClick={() => setTimer(true)}
          >
            YES
          </button>
          <button
            className={`${!timer ? "timer-btn timer-active" : "timer-btn"}`}
            onClick={() => setTimer(false)}
          >
            NO
          </button>
        </div>
      </div>
      <div className="form-control">
        <label>Timer Type</label>
        <div className="btn-container">
          {/* <button ref={Ref} className="quiz-select-btn">
            WHOLE QUIZ
          </button>
          <button ref={Ref} className="quiz-select-btn timer-active">
            PER QUESTION
          </button> */}
          {btnData.map((item, index) => {
            return (
              <button
                key={index}
                disabled={!timer}
                className={`${
                  index === changeID
                    ? "quiz-select-btn timer-active"
                    : "quiz-select-btn"
                }`}
                onClick={() => setChangeID(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="time">Time</label>
        <input
          type="text"
          className="form-input time-input"
          placeholder="In Sec"
        />
      </div>
      <div className="form-control">
        <label>Include sections</label>
        <div className="btn-container">
          <button
            className={`${
              sectionOpen ? "timer-btn timer-active" : "timer-btn"
            }`}
            onClick={() => setSectionOpen(true)}
          >
            YES
          </button>
          <button
            className={`${
              !sectionOpen ? "timer-btn timer-active" : "timer-btn"
            }`}
            onClick={() => setSectionOpen(false)}
          >
            NO
          </button>
        </div>
      </div>
      <div
        className={`${
          sectionOpen ? "form-control" : "form-control section-control"
        }`}
      >
        <label htmlFor="section-name">Section Name</label>
        <div className="section-container">
          {/* <input type="text" className="form-input section-input" /> */}
          <div className="section-btn-container">
            <input
              type="text"
              className="form-input section-input"
              onChange={(e) => setSectionName(e.target.value)}
            />
            <button className="section-btn" onClick={handleChange}>
              +
            </button>
          </div>
          <div className="section-text">
            {sections.map((item, index) => {
              return (
                <p key={index} className="section-name section-name-active">
                  {item}
                </p>
              );
            })}
            {/* <p className="section-name section-name-active">Section 1</p>
            <p className="section-name">Section 2</p> */}
          </div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="time">No. of questions to select</label>
        <input
          type="number"
          className="form-input time-input question-input"
          onChange={(e) => setSelectQuestion(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="time">No. of question to show</label>
        <input
          type="number"
          className="form-input time-input question-input"
          onChange={(e) => setShowQuestion(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="time">Maximum Marks</label>
        <input
          type="number"
          className="form-input time-input question-input"
          onChange={(e) => setMaxMarks(e.target.value)}
        />
      </div>
      <Link
        to="/assign"
        style={{ border: "transparent", color: "transparent" }}
      >
        <div className="next-btn">NEXT</div>
      </Link>
    </div>
  );
}

export default Form1;

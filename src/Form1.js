import React, { useState, useRef, useEffect } from "react";
import btnData from "./btnsData";
import { useHistory } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useGlobalContext } from "./context";

function Form1() {
  // const [quiz, setQuiz] = useState("");
  // const [timer, setTimer] = useState(false);
  // const [timerType, setTimerType] = useState("");
  // const [time, setTime] = useState("");
  // const [sectionOpen, setSectionOpen] = useState(false);
  const [sectionName, setSectionName] = useState("");
  // const [sections, setSections] = useState([]);
  const [selectQuestion, setSelectQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [openQuestionNumber, setOpenQuestionNumber] = useState(false);
  const [changeID, setChangeID] = useState(-1);
  // const [error, setError] = useState({ error: true, msg: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const {
    sections,
    setSections,
    quiz,
    setQuiz,
    timer,
    setTimer,
    setTimerType,
    time,
    setTime,
    sectionOpen,
    setSectionOpen,
    error,
    setError,
    fetchData,
  } = useGlobalContext();

  let history = useHistory();

  const timerChange = (e, index) => {
    setChangeID(index);
    setTimerType(e.target.value);
  };

  const handleChange = () => {
    if (
      quiz &&
      sectionName &&
      selectQuestion &&
      showQuestion &&
      maxMarks &&
      !isEditing
    ) {
      const items = {
        id: sections.length + 1,
        name: sectionName,
        questionSelect: selectQuestion,
        questionShow: showQuestion,
        maximumMarks: maxMarks,
        question_bank:"",
      };
      setSections([...sections, items]);
      setSectionName("");
      setSelectQuestion("");
      setShowQuestion("");
      setMaxMarks("");
      // setError({ error: false, msg: "" });
      showAlert(false);
    } else if (
      quiz &&
      sectionName &&
      selectQuestion &&
      showQuestion &&
      maxMarks &&
      isEditing
    ) {
      showAlert(false);
      const editItems = sections.map((item) => {
        if (item.id === editID) {
          return {
            ...item,
            name: sectionName,
            questionSelect: selectQuestion,
            questionShow: showQuestion,
            maximumMarks: maxMarks,
            question_bank:"",
          };
        }
        return item;
      });
      setSections(editItems);
      setSectionName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(false);
      setSelectQuestion("");
      setShowQuestion("");
      setMaxMarks("");
    } else {
      // setError({ error: true, msg: "Please fill Section Info" });
      showAlert(true, "Please Fill Section Info");
      // setSections([...sections]);
    }
  };

  const handleSectionOpen = () => {
    if (timer) {
      if (time) {
        setSectionOpen(true);
      } else {
        showAlert(true, "Please Enter Time");
        setSectionOpen(false);
      }
    } else {
      setSectionOpen(true);
      showAlert(false);
    }
  };

  const handleRemove = (id) => {
    const newItems = sections.filter((item) => item.id !== id);
    setSections(newItems);
  };

  const handleNext = (e) => {
    if (quiz && selectQuestion && showQuestion && maxMarks) {
      showAlert(false);
      const items = {
        id: sections.length + 1,
        name: "",
        questionSelect: selectQuestion,
        questionShow: showQuestion,
        maximumMarks: maxMarks,
        question_bank:""
      };
      setSections([...sections, items]);
      history.push("./assign");
      fetchData();
    } else if (sections && quiz) {
      showAlert(false);
      history.push("./assign");
      fetchData();
    } else {
      showAlert(true, "Please Fill Section Info");
    }
  };

  const EditSection = (id) => {
    const specificItem = sections.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setSectionName(specificItem.name);
    setShowQuestion(specificItem.questionShow);
    setSelectQuestion(specificItem.questionSelect);
    setMaxMarks(specificItem.maximumMarks);
  };

  useEffect(() => {
    if (!timer) {
      setTime("");
      setTimerType("");
      setChangeID(-1);
    }
  }, [timer]);

  // useEffect(() => {
  //   if (sectionName) {
  //     setOpenQuestionNumber(true);
  //   } else {
  //     setOpenQuestionNumber(false);
  //   }
  // }, [sectionName]);

  useEffect(() => {
    if (sectionOpen) {
      if (sectionName) {
        setOpenQuestionNumber(true);
      } else {
        setOpenQuestionNumber(false);
      }
    } else {
      setOpenQuestionNumber(true);
    }
  }, [sectionOpen, sectionName]);

  const showAlert = (show = false, msg = "") => {
    setError({ show, msg });
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     showAlert();
  //   }, 3000);
  //   return () => clearTimeout(timeOut);
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time, sectionName, showQuestion, maxMarks, selectQuestion]);

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
      <h3
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#ea711c",
        }}
        className="alert"
      >
        {error.msg}
      </h3>
      <div className="form-control">
        <label htmlFor="quiz-name">Name of Quiz</label>
        <input
          type="text"
          name="quiz-name"
          className="form-input"
          value={quiz}
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
                value={item}
                disabled={!timer}
                className={`${
                  index === changeID
                    ? "quiz-select-btn timer-active"
                    : "quiz-select-btn"
                }`}
                onClick={(e) => timerChange(e, index)}
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
          type="number"
          disabled={!timer}
          className="form-input time-input"
          placeholder="In Sec"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setError({ error: false, msg: "" });
          }}
        />
      </div>
      <div className="form-control">
        <label>Include sections</label>
        <div className="btn-container">
          <button
            className={`${
              sectionOpen ? "timer-btn timer-active" : "timer-btn"
            }`}
            onClick={handleSectionOpen}
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
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
            <button className="section-btn" onClick={handleChange}>
              +
            </button>
          </div>
          <div className="section-text">
            {sections.map((item, index) => {
              return (
                <div className="sections">
                  <button
                    key={index}
                    className="section-name section-name-active"
                    onClick={() => EditSection(item.id)}
                  >
                    {item.name && item.name}
                  </button>
                  {item.name && (
                    <button
                      className="close-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      <IoCloseSharp />
                    </button>
                  )}
                </div>
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
          disabled={!openQuestionNumber}
          value={selectQuestion}
          onChange={(e) => setSelectQuestion(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="time">No. of question to show</label>
        <input
          type="number"
          className="form-input time-input question-input"
          disabled={!openQuestionNumber}
          value={showQuestion}
          onChange={(e) => setShowQuestion(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="time">Maximum Marks</label>
        <input
          type="number"
          className="form-input time-input question-input"
          value={maxMarks}
          disabled={!openQuestionNumber}
          onChange={(e) => setMaxMarks(e.target.value)}
        />
      </div>
      <div className="next-btn" onClick={(e) => handleNext(e)}>
        NEXT
      </div>
    </div>
  );
}

export default Form1;

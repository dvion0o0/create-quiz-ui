import React, { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState("");
  const [timer, setTimer] = useState(false);
  const [timerType, setTimerType] = useState("");
  const [time, setTime] = useState("");
  const [sectionOpen, setSectionOpen] = useState(false);
  // const [sectionName, setSectionName] = useState("");
  const [sections, setSections] = useState([]);
  const [error, setError] = useState({ error: true, msg: "" });
  const [QuestionData, setQuestionData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5003/questions");
      console.log(response);
      setQuestionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        sections,
        setSections,
        quiz,
        setQuiz,
        timer,
        setTimer,
        setTimerType,
        timerType,
        time,
        setTime,
        sectionOpen,
        setSectionOpen,
        error,
        setError,
        fetchData,
        QuestionData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

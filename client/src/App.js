import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import { getFeedback } from "./service/LingozillaService";
import "./App.css";

import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import FeedBackForm from "./components/FeedBackForm";
import FeedBackPage from "./components/FeedBackPage";

import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import Lesson3 from "./components/Lesson3";
import Quiz from "./components/Quiz";
import BackToTopButton from "./components/BackToTopButton";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import styled from "styled-components";

const Button = styled.button`
  & {
    padding: 20px;
    width: 30%;
    font-size: 20px;
    background: #9d7bf4;
    color: white;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const { speak, voices } = useSpeechSynthesis();

  const textToSpeech = (word) => {
    speak({
      text: word,
      voice: voices[46],
    }); // voice index number 46 is Polish lang
  };

  useEffect(() => {
    getFeedback().then((feedbacks) => setFeedbacks(feedbacks));
  }, []);

  const addFeedback = (feedback) => {
    let temp = feedbacks.map((f) => f);
    temp.push(feedback);
    setFeedbacks(temp);
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Header />
          <NavBar />

          <Routes>
            <Route path="/" element={<LingoZillaContainer />} />
            <Route
              path="/testimonies"
              element={<FeedBackPage feedbacks={feedbacks} />}
            />
            <Route
              path="/lesson1"
              element={<Lesson1 textToSpeech={textToSpeech} />}
            />
            <Route
              path="/lesson2"
              element={<Lesson2 textToSpeech={textToSpeech} />}
            />
            <Route
              path="/lesson3"
              element={<Lesson3 textToSpeech={textToSpeech} />}
            />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>

          <BackToTopButton />

          <Button onClick={handleClick}>Let us know what you think!</Button>
          {isShown && (
            <div>
              <FeedBackForm addFeedback={addFeedback} />
            </div>
          )}
          {/* <FeedBackForm addFeedback={addFeedback} /> */}
          <Footer />
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;

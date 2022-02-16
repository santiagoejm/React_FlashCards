import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Button from "./Button";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((res) => res.json())
      .then((data) => {
        setItem(
          data.results.map((flashCardItem, idx) => {
            const answer = normalizedHTML(flashCardItem.correct_answer);
            const options = [
              ...flashCardItem.incorrect_answers.map((x) => {
                return normalizedHTML(x);
              }),
              answer,
            ];
            return {
              id: `${idx}-${Date.now()}`,
              question: normalizedHTML(flashCardItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }, []);

  const normalizedHTML = (string) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = string;
    return textArea.value;
  };

  const clickHandler = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h3 className="header">
        Switch the flashcard by leaving the mouse "Clicked" to see the right
        answer
      </h3>
      {item.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
      <Button clickHandler={clickHandler} />
    </div>
  );
}

export default App;

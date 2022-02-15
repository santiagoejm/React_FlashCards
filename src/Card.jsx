import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="front-question">
        <h3>{item.question}</h3>
        <div className="options-list">
          {item.options.map((option, idx) => {
            return (
              <div className="option" key={idx}>
                {option}
              </div>
            );
          })}
        </div>
      </div>

      <div className="back-answer">{item.answer}</div>
    </div>
  );
};

export default Card;

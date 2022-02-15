import React from "react";

const Button = ({ clickHandler }) => {
  return (
    <div className="btn-section">
      <button className="btn" onClick={clickHandler}>
        New Card
      </button>
    </div>
  );
};

export default Button;

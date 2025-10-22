import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  cursor: "pointer",
  fontSize: "35px",
  fontWeight: "800",
  outline: "none",
};

const Square = ({ value, onClick }) => {
  return (
    <div className="button">
      <button style={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;

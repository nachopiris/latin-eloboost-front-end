import React from "react";
import "./styles/gamesToPlay.css";

const GamesToPlay = ({ section, id, games, onChange }) => {
  return (
    <div
      className={
        section !== "Duo"
          ? "col-12 col-md-6 col-lg text-center"
          : "mt-3 text-center"
      }
    >
      <h5>{id}</h5>
      <span className="d-block victories">{games}</span>
      <input
        className="w-75"
        type="range"
        min="1"
        max={section !== "Duo" ? "10" : "25"}
        value={games}
        name="games"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default GamesToPlay;

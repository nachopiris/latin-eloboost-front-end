import React from "react";
import "./styles/posImg.css";
import { leagues } from "../utils/positions";

const PosImg = ({ league, division }) => {
  return (
    <div>
      {league && division ? (
        <img
          src={require(`../img/${leagues[league - 1].name
            .toLocaleLowerCase()
            .concat(
              league !== 8 && league !== 1 ? `_${division}.png` : ".png"
            )}`)}
          alt="Liga"
        />
      ) : (
        <img src={require("../img/unranked.png")} alt="Unranked" />
      )}
    </div>
  );
};

export default PosImg;

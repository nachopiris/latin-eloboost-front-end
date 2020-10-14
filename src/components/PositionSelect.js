import React from "react";

import PosImg from "./PosImg";

const PositionSelect = ({
  id,
  league,
  division,
  leagues,
  divisions,
  onChange,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg text-center">
      <h5>Posicion {id}</h5>
      <PosImg league={league} division={division} />
      <select
        value={league}
        onChange={(e) => onChange(e)}
        name={id === "Deseada" ? "ligaDeseada" : "ligaActual"}
        className="custom-select mb-3 w-75"
        disabled={!onChange}
      >
        <option value="" disabled>
          Liga {id}
        </option>
        {leagues.map((league) => {
          return (
            <option key={league.value} value={league.value}>
              {league.name}
            </option>
          );
        })}
      </select>
      {league !== 8 && league !== 1 && (
        <select
          value={division}
          onChange={(e) => onChange(e)}
          name={id === "Deseada" ? "divisionDeseada" : "divisionActual"}
          className="custom-select w-75"
          disabled={!onChange}
        >
          <option value="" disabled>
            Division {id}
          </option>
          {divisions.map((division) => {
            return (
              <option key={division.value} value={division.value}>
                {division.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default PositionSelect;

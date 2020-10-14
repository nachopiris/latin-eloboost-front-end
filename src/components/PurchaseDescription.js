import React from "react";
import { leagues } from "../utils/positions";

const PurchaseDescription = ({ data }) => {
  return (
    <ul>
      <li>
        <span className="font-weight-bold">Tipo de boost: </span>
        <span>{data.section}</span>
      </li>
      {data.section === "Divisiones" && (
        <>
          <li>
            <span className="font-weight-bold">Desde: </span>
            {data.ligaActual && data.divisionActual ? (
              <span>
                {leagues[data.ligaActual - 1].name} (Division:{" "}
                {data.divisionActual})
              </span>
            ) : (
              <span>Seleccionar Posicion</span>
            )}
          </li>
          <li>
            <span className="font-weight-bold">Hasta: </span>
            {data.ligaDeseada && data.divisionDeseada ? (
              <span>
                {leagues[data.ligaDeseada - 1].name}{" "}
                {data.ligaDeseada !== 8 &&
                  `(Division: ${data.divisionDeseada})`}
              </span>
            ) : (
              <span>Seleccionar Posicion</span>
            )}
          </li>
        </>
      )}
      {data.section !== "Divisiones" && (
        <>
          <li>
            {data.section !== "Posicionamiento" ? (
              <span className="font-weight-bold">Posicion Actual: </span>
            ) : (
              <span className="font-weight-bold">Temporada Anterior: </span>
            )}
            {data.ligaActual && data.divisionActual ? (
              <span>
                {leagues[data.ligaActual - 1].name}{" "}
                {data.ligaActual !== 1 && `(Division: ${data.divisionActual})`}
              </span>
            ) : data.section !== "Duo" ? (
              <span>Seleccionar Posicion</span>
            ) : (
              <span>Buscar Posicion</span>
            )}
          </li>
          <li>
            {data.section !== "Victorias" ? (
              <span className="font-weight-bold">Partidas: </span>
            ) : (
              <span className="font-weight-bold">Victorias: </span>
            )}
            {data.games}
          </li>
        </>
      )}

      <li>
        <span className="font-weight-bold">Precio: </span>
        <span>${data.price}</span>
      </li>
    </ul>
  );
};

export default PurchaseDescription;

import React from "react";
import axios from "axios";
import "./styles/searchSummoner.css";

import { BsSearch } from "react-icons/bs";

const SearchSummoner = ({
  getPosition,
  handleChange,
  summonerName,
  server,
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://latin-eloboost-api.herokuapp.com/api/riot/position", {
        name: summonerName,
        server: server,
      })
      .then((response) => {
        setLoading(false);
        getPosition(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h5>Invocador</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control mb-2"
          value={summonerName}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Nombre de Invocador"
          name="summonerName"
        />
        <select
          className="form-control form-control-sm mb-2"
          value={server}
          onChange={(e) => handleChange(e)}
          name="server"
        >
          <option value="" disabled>
            Servidor
          </option>
          <option value="la2">LAS</option>
          <option value="la1">LAN</option>
        </select>
        <select
          value="5v5"
          className="form-control form-control-sm mb-2"
          disabled
        >
          <option value="5v5">Solo/Duo (5v5)</option>
        </select>
        {loading ? (
          <button className="btn btn-light btn-block" disabled>
            <span
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>
            Buscando...
          </button>
        ) : (
          <button
            className="btn btn-light btn-outline-secondary btn-block"
            type="submit"
          >
            <BsSearch /> Buscar
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchSummoner;

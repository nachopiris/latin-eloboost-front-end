import React from "react";
import { Link } from "react-router-dom";
import Wallpaper from "../img/header.jpg";

const Header = () => {
  return (
    <header
      className="custom-header d-flex align-items-center"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container desc-box px-4">
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-md-6 desc-card rounded px-5 py-4"
          >
            <h3>Que esperas para subir tu cuenta?</h3>
            <p>
              En Latineloboost.com nos encargamos de subir el nivel de su cuenta
              con la mayor seriedad y con el precio mas bajo del mercado.
            </p>
            <Link
              to="/comprar"
              className="btn btn-success"
              style={{ textTransform: "uppercase" }}
            >
              Comprar Eloboost
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

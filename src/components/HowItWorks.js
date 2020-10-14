import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section style={{ backgroundColor: "white" }}>
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid #E0E0E0" }}
      >
        <h1 data-aos="fade-left" className="text-center pb-4">
          ¿Como Funciona?
        </h1>
        <div className="row">
          <div data-aos="fade-right" className="col-md-7 pr-5">
            <p className="font-weight-bold">
              Contamos con un Sistema Sencillo y 100% Seguro.
            </p>
            <p>
              Lo unico que debes hacer es seleccionar la posicion en la que se
              encuentra actualmente y la posicion donde quieres estar en la
              seccion{" "}
              <Link to="/comprar" style={{ color: "#d35537" }}>
                compras
              </Link>
              . Una vez hecho esto presionas el boton "Comprar", introduces los
              datos y por ultimo eliges el medio de pago, que puede ser via
              Paypal o Mercadopago.
            </p>
            <p>
              Al finalizar el proceso de pago recibiras el mail de cofirmacion y
              comenzaremos a jugar en su cuenta para finalizar el trabajo lo
              antes posible.
            </p>
            <p className="font-weight-bold">Ante cualquier duda:</p>
            <button
              className="btn btn-outline-danger"
              style={{ textTransform: "uppercase" }}
            >
              Contactanos
            </button>
          </div>
          <div
            data-aos="fade-left"
            className="col-md-5 text-center all-ranks pt-5"
          >
            <img src={require("../img/all-ranks.png")} alt="all-ranks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

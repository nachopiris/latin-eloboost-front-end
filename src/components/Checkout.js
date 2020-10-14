import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { leagues, divisions } from "../utils/positions";
import axios from "axios";
import "./styles/index.css";
import "./styles/checkout.css";

import PurchaseDescription from "./PurchaseDescription";

const Checkout = () => {
  const [{ purchase }] = useStateValue();

  const [state, setState] = React.useState({
    productName: "",
    section: "",
    email: "",
    summonerName: "",
    server: "",
    price: 0,
    mpReady: false,
    checked: false,
  });

  useEffect(() => {
    if (purchase) {
      if (purchase.section === "Duo") {
        setState((state) => {
          return {
            ...state,
            summonerName: purchase.summonerName,
            server: purchase.server,
          };
        });
      }
      setState((state) => {
        return {
          ...state,
          productName: buildProdName(),
          price: purchase.price,
          section: purchase.section,
        };
      });
    }
  }, [purchase]);

  const buildProdName = () => {
    const ligaActual = leagues[purchase.ligaActual - 1].name;
    const divisionActual = divisions[purchase.divisionActual - 1].name;
    let productName;
    switch (purchase.section) {
      case "Divisiones":
        const ligaDeseada = leagues[purchase.ligaDeseada - 1].name;
        const divisionDeseada = divisions[purchase.divisionDeseada - 1].name;
        productName = `Desde: ${ligaActual} ${divisionActual}, Hasta: ${ligaDeseada} ${
          ligaDeseada !== "Maestro" ? divisionDeseada : ""
        }`;
        break;
      case "Victorias":
        productName = `${ligaActual} ${divisionActual}, ${purchase.games} victorias`;
        break;
      case "Posicionamiento":
        productName = `Temporada anterior: ${ligaActual} ${
          ligaActual !== "Unranked" ? divisionActual : ""
        }, ${purchase.games} partidas de posicionamineto`;
        break;
      case "Duo":
        productName = `${ligaActual} ${
          ligaActual !== "Unranked" && ligaActual !== "Maestro"
            ? divisionActual
            : ""
        }, ${purchase.games} partidas en duo`;
        break;
      default:
        productName = null;
    }

    return productName;
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    setState({
      ...state,
      checked: true,
    });
    handlePay();
  };

  const handlePay = () => {
    axios
      .post("https://latin-eloboost-api.herokuapp.com/api/orders/create", {
        section: state.section,
        productName: state.productName,
        summonerName: state.summonerName,
        server: state.server,
        email: state.email,
        price: state.price,
        unit: 1,
      })
      .then((response) => {
        setState({
          ...state,
          mpReady: true,
        });
        const pref_id = response.data;
        const script = document.createElement("script");
        script.src =
          "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.async = true;
        script.setAttribute("data-preference-id", pref_id);
        document.getElementById("mp-form").appendChild(script);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (purchase) {
    return (
      <div className="container">
        <div className="app">
          <div className="row mb-3">
            <div className="col-md-8 m-auto text-center">
              <h2 className="my-3 custom-h2 text-dark">Finalizar Compra</h2>
              {state.section === "Divisiones" && (
                <div className="row mb-3">
                  <div className="col-4 text-right">
                    <img
                      className="tier"
                      src={require(`../img/${leagues[
                        purchase.ligaActual - 1
                      ].name.toLocaleLowerCase()}_${
                        purchase.divisionActual
                      }.png`)}
                      alt="Liga"
                    />
                  </div>
                  <div className="col-4 d-flex align-items-center px-0">
                    <img
                      className="arrow"
                      src={require("../img/finalarrow.png")}
                      alt="arrow"
                    ></img>
                  </div>
                  <div className="col-4 text-left">
                    <img
                      className="tier"
                      src={require(`../img/${leagues[
                        purchase.ligaDeseada - 1
                      ].name
                        .toLocaleLowerCase()
                        .concat(
                          purchase.ligaDeseada !== 8
                            ? `_${purchase.divisionDeseada}.png`
                            : ".png"
                        )}`)}
                      alt="Liga"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-8 m-auto pb-4">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  Detalle de orden:
                </div>
                <div className="card-body bg-light pt-2 px-0 pb-0">
                  <PurchaseDescription data={purchase} />
                </div>
              </div>
            </div>
            <div className="col-md-8 m-auto">
              <div className="pb-4 hr">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    Datos del comprador:
                  </div>
                  <div className="card-body bg-light">
                    <div className="form-group">
                      <label htmlFor="email">Email: </label>
                      <input
                        value={state.email}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="email"
                        disabled={state.checked}
                      />
                      <div className="row mt-4">
                        <div className="col">
                          <label htmlFor="summonerName">Invocador: </label>

                          <input
                            disabled={state.section === "Duo" || state.checked}
                            value={state.summonerName}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            className="form-control"
                            name="summonerName"
                            placeholder="Nombre de Invocador"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="server">Servidor: </label>
                          <select
                            disabled={state.section === "Duo" || state.checked}
                            className="form-control"
                            name="server"
                            value={state.server}
                            onChange={(e) => handleChange(e)}
                          >
                            <option disabled value="">
                              Servidor
                            </option>
                            <option value="la2">LAS</option>
                            <option value="la1">LAN</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() => handleCheck()}
                          disabled={
                            !(
                              state.email &&
                              state.summonerName &&
                              state.server
                            ) || state.checked
                          }
                        />
                        <label className="form-check-label">
                          Confirmo que los datos ingresados son correctos
                        </label>
                        {state.checked && !state.mpReady && (
                          <span
                            className="spinner-border spinner-border-sm ml-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="text-center m-auto"
                    style={{ height: "40px" }}
                  >
                    {state.mpReady ? (
                      <form action="/payment" id="mp-form"></form>
                    ) : (
                      <button className="fake-btn" disabled>
                        Pagar
                      </button>
                    )}
                  </div>
                  <div className="text-center m-auto">
                    <img
                      className="logo-mp"
                      src={require("../img/mp.jpg")}
                      alt="mp"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-light">
                    <div className="card-header">Como sigue?</div>
                    <div className="card-body">
                      <p className="card-text">
                        Al completar el pago le enviaremos un correo electronico
                        con un codigo de orden, podras utilizarlo para realizar
                        seguimiento al estado de la misma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Checkout;

import React from "react";
import axios from "axios";
import { leagues, divisions } from "../utils/positions";
import { Button, Modal } from "react-bootstrap";

class BuyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      summonerName: "",
      server: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleBuy() {
    const ligaActual = leagues[this.props.data.ligaActual - 1].name;
    const divisionActual = divisions[this.props.data.divisionActual - 1].name;
    let productName;
    switch (this.props.section) {
      case "divisions":
        const ligaDeseada = leagues[this.props.data.ligaDeseada - 1].name;
        const divisionDeseada =
          divisions[this.props.data.divisionDeseada - 1].name;
        productName = `Desde: ${ligaActual} ${divisionActual}, Hasta: ${ligaDeseada} ${
          ligaDeseada !== "Maestro" ? divisionDeseada : ""
        }`;
        break;
      case "victories":
        productName = `${ligaActual} ${divisionActual}, ${this.props.data.games} victorias`;
        break;
      case "placements":
        productName = `Temporada anterior: ${ligaActual} ${
          ligaActual !== "Unranked" ? divisionActual : ""
        }, ${this.props.data.games} partidas de posicionamineto`;
        break;
      case "duo":
        productName = `${ligaActual} ${
          ligaActual !== "Unranked" && ligaActual !== "Maestro"
            ? divisionActual
            : ""
        }, ${this.props.data.games} partidas en duo`;
        break;
      default:
        break;
    }
    axios
      .post("http://localhost:3001/api/mercadopago/payment/new", {
        productName: productName,
        productDescription: `Tipo de boost: ${this.props.section}, Invocador: ${
          this.state.summonerName
        }, Servidor: ${this.state.server === "la2" ? "LAS" : "LAN"}`,
        price: this.props.data.price,
        unit: 1,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      })
      .then((response) => {
        const pref_id = response.data.split("?pref_id=")[1];
        const script = document.createElement("script");
        script.src =
          "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.async = true;
        script.setAttribute("data-preference-id", pref_id);
        document.getElementById("mpForm").appendChild(script);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="form-group">
            <label htmlFor="firstName">Nombre: </label>
            <input
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)}
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido: </label>
            <input
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e)}
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email: </label>
            <input
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              type="text"
              className="form-control"
              name="email"
              placeholder="email"
            />
            <div className="row mt-4">
              <div className="col">
                <label htmlFor="summonerName">Nombre de Invocador: </label>
                {this.props.section !== "duo" ? (
                  <input
                    value={this.state.summonerName}
                    onChange={(e) => this.handleChange(e)}
                    type="text"
                    className="form-control"
                    name="summonerName"
                    placeholder="Nombre de Invocador"
                  />
                ) : (
                  <input
                    placeholder={this.props.data.name}
                    disabled
                    className="form-control"
                  />
                )}
              </div>
              <div className="col">
                <label htmlFor="server">Servidor: </label>
                {this.props.section !== "duo" ? (
                  <select
                    className="form-control"
                    name="server"
                    value={this.state.server}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option disabled value="">
                      Servidor
                    </option>
                    <option value="la2">LAS</option>
                    <option value="la1">LAN</option>
                  </select>
                ) : (
                  <input
                    placeholder={
                      this.props.data.server === "la2" ? "LAS" : "LAN"
                    }
                    disabled
                    className="form-control"
                  />
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={
              this.state.firstName &&
              this.state.lastName &&
              this.state.email &&
              this.state.summonerName &&
              this.state.server
                ? false
                : true
            }
            className="mx-5"
            variant="primary"
            block
            onClick={() => this.handleBuy()}
          >
            Pagar
          </Button>
          <form method="POST" id="mpForm"></form>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BuyForm;

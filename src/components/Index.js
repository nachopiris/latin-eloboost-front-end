import React from "react";
import "./styles/index.css";

import Divisions from "./Divisions";
import Victories from "./Victories";
import Duo from "./Duo";
import Placements from "./Placements";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "Divisiones",
    };
  }

  handleChange(e) {
    this.setState({
      section: e.target.id,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="row mb-3">
            <div
              onClick={(e) => this.handleChange(e)}
              id="Divisiones"
              className={`col-6 col-md-3 text-center p-3 ${
                this.state.section === "Divisiones"
                  ? "my-nav-item-active"
                  : "my-nav-item"
              }`}
            >
              Divisiones
            </div>
            <div
              onClick={(e) => this.handleChange(e)}
              id="Victorias"
              className={`col-6 col-md-3 text-center p-3 ${
                this.state.section === "Victorias"
                  ? "my-nav-item-active"
                  : "my-nav-item"
              }`}
            >
              Victorias
            </div>
            <div
              onClick={(e) => this.handleChange(e)}
              id="Posicionamiento"
              className={`col-6 col-md-3 text-center p-3 ${
                this.state.section === "Posicionamiento"
                  ? "my-nav-item-active"
                  : "my-nav-item"
              }`}
            >
              Posicionamiento
            </div>
            <div
              onClick={(e) => this.handleChange(e)}
              id="Duo"
              className={`col-6 col-md-3 text-center p-3 ${
                this.state.section === "Duo"
                  ? "my-nav-item-active"
                  : "my-nav-item"
              }`}
            >
              Duo
            </div>
          </div>
          <Divisions section={this.state.section} />
          <Victories section={this.state.section} />
          <Placements section={this.state.section} />
          <Duo section={this.state.section} />
        </div>
      </div>
    );
  }
}

export default Index;

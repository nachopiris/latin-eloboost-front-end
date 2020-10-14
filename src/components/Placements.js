import React from "react";
import { leagues, divisions } from "../utils/positions";

import PositionSelect from "./PositionSelect";
import GamesToPlay from "./GamesToPlay";
import BuyArea from "./BuyArea";

class Placements extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ligaActual: "",
      divisionActual: "",
      games: 5,
      price: 0,
    };
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: parseInt(e.target.value),
      },
      async () => {
        await this.posCorrector();
        if (this.state.ligaActual && this.state.divisionActual) {
          this.priceCalculator();
        }
      }
    );
  }

  posCorrector() {
    if (this.state.ligaActual === 1) {
      this.setState({
        divisionActual: 4,
      });
    }
  }

  priceCalculator() {
    let gamePrice;
    if (this.state.divisionActual === 1 || this.state.divisionActual === 2) {
      gamePrice = leagues[this.state.ligaActual].price;
    } else {
      gamePrice = leagues[this.state.ligaActual - 1].price;
    }
    const price = gamePrice * this.state.games;
    this.setState({
      price: price,
    });
  }

  actualLeagueSelect() {
    return leagues.slice(0, -1);
  }

  render() {
    switch (this.props.section) {
      case "Posicionamiento":
        return (
          <div className="row">
            <PositionSelect
              id={"Anterior"}
              league={this.state.ligaActual}
              division={this.state.divisionActual}
              leagues={this.actualLeagueSelect()}
              divisions={divisions}
              onChange={this.handleChange}
            />
            <GamesToPlay
              section={this.props.section}
              id={"Partidas"}
              games={this.state.games}
              onChange={this.handleChange}
            />
            <BuyArea section={this.props.section} data={this.state} />
          </div>
        );
      default:
        return null;
    }
  }
}

export default Placements;

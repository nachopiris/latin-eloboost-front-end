import React from "react";
import { leagues, divisions } from "../utils/positions";

import PositionSelect from "./PositionSelect";
import GamesToPlay from "./GamesToPlay";
import BuyArea from "./BuyArea";

class Victories extends React.Component {
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
      () => {
        if (this.state.ligaActual && this.state.divisionActual) {
          this.priceCalculator();
        }
      }
    );
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
    return leagues.slice(1, -1);
  }

  render() {
    switch (this.props.section) {
      case "Victorias":
        return (
          <div className="row">
            <PositionSelect
              id={"Actual"}
              league={this.state.ligaActual}
              division={this.state.divisionActual}
              leagues={this.actualLeagueSelect()}
              divisions={divisions}
              onChange={this.handleChange}
            />
            <GamesToPlay
              section={this.props.section}
              id={"Victorias"}
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

export default Victories;

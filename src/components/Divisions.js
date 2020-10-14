import React from "react";
import { leagues, divisions } from "../utils/positions";

import PositionSelect from "./PositionSelect";
import BuyArea from "./BuyArea";

class Divisions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ligaActual: "",
      divisionActual: "",
      ligaDeseada: "",
      divisionDeseada: "",
      price: 0,
    };
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: parseInt(e.target.value),
      },
      async () => {
        await this.PosCorrector();
        if (
          this.state.ligaActual &&
          this.state.divisionActual &&
          this.state.ligaDeseada &&
          this.state.divisionDeseada
        ) {
          this.priceCalculator();
        }
      }
    );
  }

  priceCalculator() {
    let price;
    if (this.state.ligaActual === this.state.ligaDeseada) {
      price =
        (this.state.divisionActual - this.state.divisionDeseada) *
        leagues[this.state.ligaActual - 1].price;
    } else {
      const leaguesToPlay = leagues.slice(
        this.state.ligaActual - 1,
        this.state.ligaDeseada
      );
      const tailLeaguesPrice =
        (this.state.divisionActual - 1) * leaguesToPlay[0].price +
        (5 - this.state.divisionDeseada) *
          leaguesToPlay[leaguesToPlay.length - 1].price;
      if (leaguesToPlay.length === 2) {
        price = tailLeaguesPrice;
      } else {
        const midLeaguesPrice = leaguesToPlay
          .slice(1, -1)
          .reduce((acc, curr) => {
            return acc + curr.price * 4;
          }, 0);
        price = midLeaguesPrice + tailLeaguesPrice;
      }
    }
    this.setState({
      price: price,
    });
  }

  PosCorrector() {
    if (this.state.ligaDeseada === 8 && this.state.divisionDeseada !== 4) {
      this.setState({
        divisionDeseada: 4,
      });
    }
    if (this.state.ligaActual && this.state.divisionActual) {
      if (
        this.state.ligaDeseada &&
        this.state.ligaActual >= this.state.ligaDeseada
      ) {
        if (this.state.divisionActual === 1) {
          this.setState({
            ligaDeseada: this.state.ligaActual + 1,
            divisionDeseada: 4,
          });
        } else if (this.state.divisionDeseada >= this.state.divisionActual) {
          this.setState({
            ligaDeseada: this.state.ligaActual,
            divisionDeseada: this.state.divisionActual - 1,
          });
        } else if (
          this.state.divisionDeseada < this.state.divisionActual &&
          this.state.ligaActual > this.state.ligaDeseada
        ) {
          this.setState({
            ligaDeseada: this.state.ligaActual,
            divisionDeseada: this.state.divisionActual - 1,
          });
        }
      }
    }
  }

  actualLeagueSelect() {
    return leagues.slice(1, -1);
  }

  desiredLeagueSelect() {
    if (this.state.ligaActual && this.state.divisionActual === 1) {
      return leagues.slice(this.state.ligaActual);
    } else if (this.state.ligaActual) {
      return leagues.slice(this.state.ligaActual - 1);
    }
    return leagues.slice(1);
  }

  desiredDivisionSelect() {
    if (
      this.state.ligaActual &&
      this.state.divisionActual &&
      this.state.ligaActual === this.state.ligaDeseada
    ) {
      return divisions.slice(0, this.state.divisionActual - 1);
    }
    return divisions;
  }

  render() {
    switch (this.props.section) {
      case "Divisiones":
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
            <PositionSelect
              id={"Deseada"}
              league={this.state.ligaDeseada}
              division={this.state.divisionDeseada}
              leagues={this.desiredLeagueSelect()}
              divisions={this.desiredDivisionSelect()}
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

export default Divisions;

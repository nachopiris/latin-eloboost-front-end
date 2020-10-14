import React from "react";
import { leagues, divisions } from "../utils/positions";

import SearchSummoner from "./SearchSummoner";
import PositionSelect from "./PositionSelect";
import BuyArea from "./BuyArea";
import GamesToPlay from "./GamesToPlay";

class Duo extends React.Component {
  constructor(props) {
    super(props);

    this.getPosition = this.getPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      summonerName: "",
      server: "",
      ligaActual: "",
      divisionActual: "",
      games: 5,
      price: 0,
    };
  }

  handleChange(e) {
    if (e.target.name === "games") {
      this.setState(
        {
          games: parseInt(e.target.value),
        },
        () => {
          if (this.state.ligaActual && this.state.divisionActual) {
            this.priceCalculator();
          }
        }
      );
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  posCorrector() {
    if (this.state.ligaActual === 8 || this.state.ligaActual === 1) {
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

  getPosition(data) {
    const league = leagues.find((el) => el.id === data.league);
    const division = divisions.find((el) => el.name === data.division);
    this.setState(
      {
        ligaActual: league.value,
        divisionActual: division.value,
      },
      async () => {
        await this.posCorrector();
        this.priceCalculator();
      }
    );
  }

  render() {
    switch (this.props.section) {
      case "Duo":
        return (
          <div className="row row-cols-3">
            <div className="col-12 col-md-6 col-lg text-center">
              <SearchSummoner
                getPosition={this.getPosition}
                handleChange={this.handleChange}
                summonerName={this.state.summonerName}
                server={this.state.server}
              />
              <GamesToPlay
                section={this.props.section}
                id={"Partidas"}
                games={this.state.games}
                onChange={this.handleChange}
              />
            </div>
            <PositionSelect
              id={"Actual"}
              league={this.state.ligaActual}
              division={this.state.divisionActual}
              leagues={leagues}
              divisions={divisions}
            />
            <BuyArea data={this.state} section={this.props.section} />
          </div>
        );
      default:
        return null;
    }
  }
}

export default Duo;

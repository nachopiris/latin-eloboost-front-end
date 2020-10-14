import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

import PurchaseDescription from "./PurchaseDescription";
import ServiceDescription from "./ServiceDescription";

const BuyArea = ({ data, section }) => {
  const [{}, dispatch] = useStateValue();

  const handleBuy = () => {
    dispatch({
      type: "BUY",
      payload: {
        ...data,
        section,
      },
    });
  };

  return (
    <div
      className="col-12 col-lg-5 px-3"
      style={{
        borderLeft: "1px solid #E0E0E0",
      }}
    >
      <h5>Su Orden:</h5>
      <PurchaseDescription data={{ ...data, section }} />
      <Link
        to="/checkout"
        className={`btn btn-info btn-block w-75 m-auto ${
          data.price ? "" : "disabled"
        }`}
        onClick={() => handleBuy()}
      >
        Comprar
      </Link>
      <ServiceDescription section={section} />
    </div>
  );
};

export default BuyArea;

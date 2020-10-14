import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import "./styles/paymentRedirect.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PaymentRedirect = () => {
  const query = useQuery();

  const [state, setState] = React.useState({
    status: "",
    orderId: "",
  });

  useEffect(() => {
    if (!state.status && !state.orderId) {
      setState((state) => {
        return {
          ...state,
          status: query.get("payment_status"),
          orderId: query.get("external_reference"),
        };
      });
    }
  }, [state]);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-8 col-lg-6 col-10 text-center alert-card m-auto p-0">
          <div className="card">
            <div className="card-header bg-dark justify-content-center align-items-center d-flex">
              <span
                className={`h3 text-${
                  (state.status === "approved" && "success") ||
                  (state.status === "pending" && "primary")
                }`}
              >
                {state.status === "approved" && <FaCheckCircle />}
                {state.status === "pending" && <FaInfoCircle />}
              </span>
              <span className="ml-2 payment-result">
                {state.status === "approved" && "Pago Aprobado!"}
                {state.status === "pending" && "Pago Pendiente"}
              </span>
            </div>
            <div className="card-body bg-light">holaaa</div>
            <div className="card-footer bg-light">
              <Link to="/" style={{ color: "#d35537" }}>
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRedirect;

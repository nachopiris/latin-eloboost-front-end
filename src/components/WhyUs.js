import React from "react";
import { FaDollarSign, FaLock, FaBolt } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section style={{ backgroundColor: "white" }}>
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid #E0E0E0" }}
      >
        <h1 data-aos="fade-right" className="text-center pb-4">
          ¿Por que elegirnos?
        </h1>
        <div className="row mt-5">
          <div data-aos="zoom-in" className="col-md-4 text-center px-5">
            <div className="rounded-circle d-flex align-items-center justify-content-center feature-logo mb-4">
              <FaDollarSign />
            </div>
            <p className="font-weight-bold">Precio</p>
            <p>
              El precio es muy importante a la hora de contratar un servicio. En
              Latineloboost.com encontraras los mas bajos de Internet con una
              velocidad y seriedad inigualables.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="col-md-4 text-center px-5"
            style={{
              borderLeft: "1px solid #E0E0E0",
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <div className="rounded-circle d-flex align-items-center justify-content-center feature-logo mb-4">
              <FaLock />
            </div>
            <p className="font-weight-bold">Seguridad</p>
            <p>
              Los servidores VPN nos permiten mantenernos 100% anonimos cuando
              jugamos en su cuenta. Ninguno de nuestros Boosters hablara con sus
              contactos mientras se realiza el trabajo.
            </p>
          </div>
          <div data-aos="zoom-in" className="col-md-4 text-center px-5">
            <div className="rounded-circle d-flex align-items-center justify-content-center feature-logo mb-4">
              <FaBolt />
            </div>
            <p className="font-weight-bold">Velocidad</p>
            <p>
              Contamos con jugadores grandmaster y challengers. ¡No se detendran
              hasta llegar a donde quieres estar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

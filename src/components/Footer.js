import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer font-small blue pt-4 bg-dark text-white">
      <div class="container text-center text-md-left">
        <div class="row py-5">
          <div class="col-md-4 mt-md-0 mt-3 pr-5">
            <h5
              class="text-uppercase text-secondary mb-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              Footer Content
            </h5>
            <p className="border-top border-secondary pt-2">
              We are a group of highly experienced, trust-worthy and responsible
              people. We know how to boost players in the most efficient way -
              we have been doing it since the 2013
            </p>
          </div>

          <div class="col-md-2 mb-md-0 mb-3">
            <h5
              class="text-uppercase text-secondary mb-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              Links
            </h5>

            <ul class="border-top border-secondary list-unstyled pt-2">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2 mb-md-0 mb-3">
            <h5
              class="text-uppercase text-secondary mb-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              Links
            </h5>

            <ul class="border-top border-secondary list-unstyled pt-2">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 mb-md-0 mb-3">
            <h5
              class="text-uppercase text-secondary mb-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              Links
            </h5>

            <ul class="border-top border-secondary list-unstyled pt-2">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2 mb-md-0 mb-3">
            <h5
              class="text-uppercase text-secondary mb-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              Links
            </h5>

            <ul class="border-top border-secondary list-unstyled pt-2">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-copyright text-center py-4"
        style={{ backgroundColor: "#000" }}
      >
        © 2020 Copyright:{" "}
        <Link to="/" style={{ color: "#d35537" }}>
          Latineloboost.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

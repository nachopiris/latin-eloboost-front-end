import React from "react";

const ServiceDescription = ({ section }) => {
  return (
    <div
      className="mt-3 pt-3"
      style={{
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <p className="font-weight-bold">
        Every account is VPN protected by our dedicated application.
      </p>
      {section === "Divisiones" && (
        <p>
          Contains full boost to 0LP desired league, no additional costs if we
          fail promotion (we will play until we achieve it).
        </p>
      )}
      {section === "Victorias" && (
        <p>
          Each loss is -1 to won games, so we will play every time a game more.
          We will try to win all BO3, BO5 and common games on any further tier
          as long as there'll be "wins" left.
        </p>
      )}
      {section === "Posicionamiento" && (
        <p>
          We guarantee at least 70% win ratio for 10 placement games or a full
          money refund.
        </p>
      )}
      {section === "Duo" && (
        <p>
          Booster will play with you only number of games you have selected,
          irrespective of the result.
        </p>
      )}
      <p>
        Queues:{" "}
        <span className="font-weight-bold">
          Solo/Duo (5v5), Flex Summoners Rift (5v5).
        </span>
      </p>
      <p>
        Service available for North America, Europe West, Europe Nordic & East,
        Brazil, Latin America, Russia, Turkey, Oceania and Japan!
      </p>
    </div>
  );
};

export default ServiceDescription;

import React, { useState } from "react";
import _ from "lodash";

import ReactCardFlip from "react-card-flip";
import { Card } from "antd";

import "./ProgramCard.css";

const ProgramCard = ({ programItem }) => {
  const { title, imageUrl, program, black } = programItem;

  const [isFlipped, setIsFlipped] = useState(false);

  const renderProgramItem = (item, id) => {
    return (
      <p key={id} style={{ fontSize: "1rem" }}>
        <b>{item.author}</b> {item.date} <br />
        {item.title}
      </p>
    );
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <Card
          className="program-card"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            textAlign: "center",
            color: black ? "black" : "white",
          }}
        >
          <p style={{ marginBottom: 0, fontSize: "1.5rem" }}>
            <b>{title}</b>
          </p>
        </Card>
      </div>
      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <Card
          className="program-card"
          style={{
            backgroundColor: "#ffffff",
            borderWidth: "5px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            {program.length && _.map(program, renderProgramItem)}
          </div>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

export default ProgramCard;

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "antd";

const OeuvreCard = ({ artworkItem }) => {
  const { author, creation, name, birth, video, imageUrl, black } = artworkItem;

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <Card
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            width: 230,
            height: "12rem",
            margin: "15px",
            borderRadius: "10px",
            textAlign: "center",
            color: black ? "black" : "white",
          }}
        >
          <p style={{ marginBottom: 0 }}>
            <b>{name}</b>
          </p>
          <p style={{ marginBottom: 0 }}>{author}</p>
        </Card>
      </div>
      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <Card
          style={{
            backgroundColor: "#ffffff",
            width: 230,
            height: "12rem",
            margin: "15px",
            borderRadius: "10px",
            borderWidth: "5px",
            textAlign: "center",
          }}
        >
          <p style={{ marginBottom: 0 }}>
            <b>{name}</b>
          </p>
          <p style={{ marginBottom: 0 }}>{author}</p>
          <p style={{ marginBottom: 0 }}>{birth}</p>
          <p style={{ marginBottom: 0 }}>{creation}</p>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

export default OeuvreCard;

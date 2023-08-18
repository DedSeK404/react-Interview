import React from "react";
import { Card } from "flowbite-react";
import LikeRatio from "./LikeRatio";

const ProdCard = ({ data }) => {
  return (
    <Card horizontal className="CardContainer">
      <div className="imageBox">
        <img className="image" src={data.image} alt="Image not found" />
      </div>
      <div className="textContainer">
        <p className="title">{data.title}</p>
        <p className="details">{data.details}</p>
      </div>
      <LikeRatio LikeData={data} />
    </Card>
  );
};

export default ProdCard;

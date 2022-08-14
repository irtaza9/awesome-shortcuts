import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Figure } from "react-bootstrap";
import "./itemcard.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const ItemCard = (props) => {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="col-11 col-md-6 col-lg-2 mx-0 mb-4">
      <Card className="text-center card-b">
        <Figure className="pt-6 lg:pt-10 figure">{props.img}</Figure>
        <Card.Body>
          <Card.Title className="text-sm lg:text-lg font-medium">
            {props.title}
          </Card.Title>
          <Card.Text className="opacity-80 text-2xs lg:text-sm">
            {props.desc}
          </Card.Text>
        </Card.Body>
        <div
          className="justify-center mb-3 lg:mb-3"
          onClick={() => openInNewTab(props.url)}
        >
          <ControlPointIcon fontSize="large" />
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;

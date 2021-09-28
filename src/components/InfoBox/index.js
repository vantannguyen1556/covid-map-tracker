import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox(props) {
  return (
    <Card
      onClick={props.onClick}
      className={`info-box ${props.active && "selected"} ${props.isRed && "red-box"
        }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <h2 className={`info-cases ${!props.isRed && "green-box"}`}>
          {props.cases}
        </h2>
        <Typography className="info-total" color="textSecondary">
          {props.total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

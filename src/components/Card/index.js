import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="_component card"
      data-name="Card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        className="_component"
        data-name="CardBtn"
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        className="_component"
        data-name="CardBtn"
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;

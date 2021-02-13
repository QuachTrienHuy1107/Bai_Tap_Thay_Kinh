import React, { Component } from "react";
import style from "./Model.module.css";

export default class Model extends Component {
  render() {
    const { infoItem } = this.props;
    return (
      <div
        className={`${style["vglasses__model"]}`}
        style={{ backgroundImage: `url('./img/model.jpg')` }}
      >
        <img src={infoItem.url} alt="" width="300" />
        <div className={`${style["vlasses__model__info"]}`}>
          <h3>{infoItem.name}</h3>
          <p>{infoItem.desc}</p>
        </div>
      </div>
    );
  }
}

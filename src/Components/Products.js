import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const { getData, changeGlasses } = this.props;

    return (
      <div>
        <img
          src={getData.url}
          width="150"
          alt={getData.name}
          style={{ margin: 10, cursor: "pointer" }}
          onClick={() => changeGlasses(getData)}
        />
      </div>
    );
  }
}

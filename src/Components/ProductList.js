import React, { Component } from "react";
import Products from "./Products";

export default class ProductList extends Component {
  render() {
    const { arrProduct,changeGlasses } = this.props;
    return (
      <div className="d-flex justify-content-center flex-wrap bg-dark my-5">
        {arrProduct.map((item, index) => {
          return <Products getData={item} key={index} changeGlasses={changeGlasses} />;
        }, "")}
      </div>
    );
  }
}

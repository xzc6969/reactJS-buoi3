import React, { Component } from "react";
import ProductItem from "./ProductItem";
import data from "../data/data.json";

export default class ProductList extends Component {
  renderProductList = () => {
    return data.map((product, idx) => {
      return (
        <div key={idx} className="col-4 py-5 px-5">
          <ProductItem item={product} productDetail={this.props.productDetail} />
        </div>
      );
    });
  };
 
  render() {
    return <div className="row">{this.renderProductList()}</div>;
  }
}

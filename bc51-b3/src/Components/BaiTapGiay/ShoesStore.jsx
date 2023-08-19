import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "../data/data.json";
import Modal from "./Modal";

export default class ShoesStore extends Component {
    state = {
        productDetail: data[0],
      };
      productDetail = (shoes) => {
        this.setState({
            productDetail: shoes,
        })
      };
  render() {
    return (
      <>
        <ProductList productDetail={this.productDetail}/>
        <Modal detail={this.state.productDetail}/>
      </>
    );
  }
}

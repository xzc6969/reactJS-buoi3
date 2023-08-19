import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.item.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.name}</h4>
          <button
            className="btn btn-primary"
            onClick={() => this.props.productDetail(this.props.item)}
          >
            Show Detail
          </button>
        </div>
      </div>
    );
  }
}

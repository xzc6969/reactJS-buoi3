import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-4 text-center">
          <h2>{this.props.detail.name}</h2>
          <img
            className="img-fluid"
            alt="..."
            src={this.props.detail.image}/>
          />
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <td colSpan={2}>
                    <h1>Chi tiết sản phẩm</h1>
                  </td>
                </tr>
                <tr>
                  <td>Alias</td>
                  <td>{this.props.detail.alias}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{this.props.detail.price}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{this.props.detail.description}</td>
                </tr>
                <tr>
                  <td>Short Description</td>
                  <td>{this.props.detail.shortDescription}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{this.props.detail.quantity}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

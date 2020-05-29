import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      price: 0,
      currentProductId: 0,
    };
  }

  componentDidUpdate(prevP, prevS) {
    if (prevP !== this.props) {
      this.setState({
        img: this.props.img,
        name: this.props.name,
        price: this.props.price,
        currentProductId: this.props.id,
      });
    }
    console.log(this.state);
  }

  addToInventory() {
    const { img, name, price } = this.state;
    const body = { img, name, price };
    axios.post("/api/product", body);
    this.props.getInventoryMethod();
    this.resetState();
  }
  handleURL(val) {
    this.setState({
      img: val,
    });
  }
  handleProdName(val) {
    this.setState({
      name: val,
    });
  }
  handlePrice(val) {
    this.setState({
      price: val,
    });
  }
  resetState() {
    this.setState({
      img: this.state.img,
      name: this.state.name,
      price: this.state.price,
    });
  }

  render() {
    console.log(this.state.isEditing)
    return (
      <div>
        <form>
          <div className="form-inputs-container">
            <h1>Image URL:</h1>
            <input
              name="img"
              onChange={(e) => this.handleURL(e.target.value)}
              className="form-inputs"
            ></input>
            <h1>Product Name:</h1>
            <input
              name="name"
              onChange={(e) => this.handleProdName(e.target.value)}
              className="form-inputs"
            ></input>
            <h1>Price:</h1>
            <input
              name="price"
              onChange={(e) => this.handlePrice(e.target.value)}
              className="form-inputs"
            ></input>
          </div>
            {!this.props.isEditing ? (
              <div className="form-buttons-container">
              <button onClick={() => this.resetState()} className="form-buttons">
              Cancel
            </button>
            <button
              onClick={() => this.addToInventory()} className="form-buttons">Add to Inventory</button>
              </div>
            ) : (
              <div className="form-buttons-container">
                <button onClick={() => this.toggleEdit()} className="form-buttons">
              Cancel
            </button>
              <button>Save Changes</button>
              </div>
            )}
        </form>
      </div>
    );
  }
}

export default Form;

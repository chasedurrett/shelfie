import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.deleteProduct = this.deleteProduct.bind(this)
  }
  
  
  deleteProduct(id){
    axios.delete(`/api/product/${id}`)
    this.props.getInventoryMethod()
  }


  render() {
    const inventory = this.props.inventory.map((e, i) => {
      return (
        <div key={i} className="product-container">
          <Product deleteProduct={this.deleteProduct} img={e.img} name={e.name} price={e.price} id={e.id}/>
        </div>
      );
    });
    return (
      <div>
        {inventory}
      </div>
    );
  }
}

export default Dashboard;

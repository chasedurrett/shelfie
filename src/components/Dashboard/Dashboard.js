import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    const inventory = this.props.inventory.map((e, i) => {
    return <Product key={i} img={e.img} name={e.name} price={e.price}/>
    })
    return (
      <div>
        Dashboard
        {inventory}
      </div>
    );
  }
}

export default Dashboard;

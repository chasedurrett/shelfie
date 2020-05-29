import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      name: "",
      price: "",
    };
  }


  handleURL(val){
      this.setState({
          img: val
      })
  }
  handleProdName(val){
      this.setState({
          name: val
      })
  }
  handlePrice(val){
      this.setState({
          price: val
      })
  }
  resetState(){
      this.setState({
          img: this.state.img,
          name: this.state.name,
          price: this.state.price
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
        <div className="form-inputs-container">
          <input name="img" onChange={e => this.handleURL(e.target.value)} className="form-inputs"></input>
          <input name="name" onChange={e => this.handleProdName(e.target.value)} className="form-inputs"></input>
          <input name="price" onChange={e => this.handlePrice(e.target.value)} className="form-inputs"></input>
        </div>
        <div className='form-buttons-container'>
            <button onClick={() => this.resetState()} className='form-buttons'>Cancel</button>
            <button className='form-buttons'>Add to Inventory</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Form;

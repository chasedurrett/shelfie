import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: {},
      isEditing: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => console.log(err));
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard-container">
          <Dashboard
            inventory={this.state.inventory}
            getInventoryMethod={this.componentDidMount}
            toggleEdit={this.toggleEdit}
          />
        </div>
        <div className="form-container">
          <Form
            getInventoryMethod={this.getInventory}
            currentProduct={this.state.currentProduct}
            isEditing={this.state.isEditing}
            toggleEdit={this.toggleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;

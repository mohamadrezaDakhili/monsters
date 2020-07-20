import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClear = () => {
    this.setState({ name: "", email: "" });
  };
  handleSubmit = (event) => {
    const { name, email } = this.state;
    event.preventDefault();
    const newMonster = { name, email };
    this.props.handleAdd(newMonster);
  };
  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={this.handleChange}
        />
        <label htmlFor="email">email:</label>

        <input
          id="email"
          name="email"
          value={email}
          type="text"
          onChange={this.handleChange}
        />
        <button type="submit">save</button>
        <button type="button" onClick={this.handleClear}>
          clear
        </button>
      </form>
    );
  }
}

export default Form;

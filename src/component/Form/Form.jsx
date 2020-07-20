import React, { Component } from "react";
import { createUsers } from "../../api/services/send-users";

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
    event.preventDefault();
    const { name, email } = this.state;
    const user = { name, email };
    createUsers(user)
      .then((res) => {
        this.props.handleAdd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

import React, { Component } from "react";
import "./monster-card.css";
import Form from "../Form/Form";
import MonsterTable from "../MonsterTable/MonsterTable";

export default class MonsterContainer extends Component {
  state = {
    monsters: [],
    search: "",
  };

  handleDelete = (id) => {
    const { monsters } = this.state;
    this.setState({
      monsters: monsters.filter((monster) => monster.id !== id),
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ monsters: data });
      });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleAdd = (obj) => {
    this.setState({ monsters: [...this.state.monsters, obj] });
  };
  render() {
    const { monsters, search } = this.state;
    let filteredMonsters = monsters.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
      <div className="">
        <input name={"search"} onChange={this.handleChange}></input>
        <Form handleAdd={this.handleAdd} />
        <MonsterTable
          filteredMonsters={filteredMonsters}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./monster-card.css";
import Form from "../Form/Form";
import MonsterTable from "../MonsterTable/MonsterTable";
import Search from "../Search/Search.jsx";

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
    this.setState({ monsters: [obj, ...this.state.monsters] });
  };

  render() {
    const { monsters, search } = this.state;
    let filteredMonsters = monsters.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
      <div className="">
        <Search handleChange={this.handleChange} search={search} />
        <Form handleAdd={this.handleAdd} monsters={this.state.monsters} />
        <MonsterTable
          filteredMonsters={filteredMonsters}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

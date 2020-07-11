import React, { Component } from "react";
import MonsterCard from "./MonsterCard";
import "./monster-card.css";
export default class MonsterContainer extends Component {
  state = {
    monsters: [],
    search: "",
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
  render() {
    const { monsters, search } = this.state;
    let filteredMonsters = monsters.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
      <div className="">
        <input name={"search"} onChange={this.handleChange}></input>
        <div className="grid-container">
          {filteredMonsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>
      </div>
    );
  }
}

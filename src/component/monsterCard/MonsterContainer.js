import React, { Component } from "react";
import MonsterCard from "./MonsterCard";
import "./monster-card.css";
export default class MonsterContainer extends Component {
  state = {
    monsters: [],
    search: "",
  };

  handleDelete = (id) => {
    const { monsters } = this.state;
    console.log(id);
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
            <MonsterCard
              key={monster.id}
              monster={monster}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

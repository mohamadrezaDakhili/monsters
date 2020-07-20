import React, { Component } from "react";
import MonsterCard from "./MonsterCard";
import "./monster-card.css";
import Delete from "../Delete/Delete";
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
            <div>
              <MonsterCard key={monster.id} monster={monster} />
              <Delete handleDelete={() => this.handleDelete(monster.id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

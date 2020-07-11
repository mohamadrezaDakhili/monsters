import React, { Component } from "react";
import "./monster-card.css";
export default class MonsterCard extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div key={monster.id} className="grid-item">
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
        <img
          src={
            "https://api.adorable.io/avatars/256/Ali@adorable.png" + monster.id
          }
        ></img>
      </div>
    );
  }
}

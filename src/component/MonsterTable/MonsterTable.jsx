import React, { Component } from "react";
import MonsterCard from "../monsterCard/MonsterCard";
import Delete from "../Delete/Delete";
import "./monsterTable.scss";

export class MonsterTable extends Component {
  render() {
    const { filteredMonsters, handleDelete } = this.props;
    return (
      <div className="grid-container">
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <MonsterCard monster={monster} />
            <Delete handleDelete={() => handleDelete(monster.id)} />
          </div>
        ))}
      </div>
    );
  }
}

export default MonsterTable;

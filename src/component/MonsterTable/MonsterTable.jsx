import React, { Component } from "react";
import MonsterCard from "../monsterCard/MonsterCard ";
import Delete from "../Delete/Delete";
import "./monsterTable.scss";

export class MonsterTable extends Component {
  render() {
    const { filteredMonsters, handleDelete } = this.props;
    return (
      <div className="grid-container">
        {filteredMonsters.map((monster, index) => (
          <div key={index}>
            <MonsterCard monster={{ ...monster, id: index }} />
            <Delete handleDelete={() => handleDelete(index)} />
          </div>
        ))}
      </div>
    );
  }
}

export default MonsterTable;

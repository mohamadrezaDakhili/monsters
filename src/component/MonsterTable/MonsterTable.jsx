import React, { Component } from "react";
import MonsterCard from "../monsterCard/MonsterCard";
import Delete from "../Delete/Delete";
import "./monsterTable.scss";
import { Link } from "react-router-dom";

export function MonsterTable({ filteredMonsters, handleDelete }) {
  return (
    <div className="grid-container">
      {filteredMonsters.map((monster, index) => (
        <div key={index}>
          <Link to={`/monsters/${monster.id}`}>
            <MonsterCard monster={{ ...monster, id: index }} />
          </Link>
          <Delete handleDelete={() => handleDelete(index)} />
        </div>
      ))}
    </div>
  );
}

export default MonsterTable;

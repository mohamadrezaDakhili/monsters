import React, { Component, useState, useEffect } from "react";
import "./monster-card.css";
import Form from "../Form/Form";
import MonsterTable from "../MonsterTable/MonsterTable";
import Search from "../Search/Search.jsx";

export default function MonsterContainer() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setMonsters(monsters.filter((monster) => monster.id !== id));
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  let filteredMonsters = monsters.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="">
      <Search handleChange={handleChange} search={search} />
      <MonsterTable
        filteredMonsters={filteredMonsters}
        handleDelete={handleDelete}
      />
    </div>
  );
}

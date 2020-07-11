import React from "react";
import "./App.css";
import MonsterContainer from "./component/monsterCard/MonsterContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MonsterContainer />
      </div>
    );
  }
}

export default App;

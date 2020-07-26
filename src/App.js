import React from "react";
import "./App.css";
import MonsterArchive from "./View/MonsterArchive/MonsterArchive";
import AddMonster from "./View/AddMonster/AddMonster";
import MonsterSingle from "./View/MonsterSingle/MonsterSingle.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/monsters/add">add</Link>
            </li>
            <li>
              <Link to="/monsters">Monsters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/monsters/add">
            <AddMonster />
          </Route>
          <Route exact path="/monsters">
            <MonsterArchive />
          </Route>
          <Route path="/"></Route>
          <Route path="/monsters/:id">
            <MonsterSingle />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

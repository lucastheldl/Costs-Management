import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/company">Company</Link>
        <Link to="/newProject">New Project</Link>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/newProject">
          <NewProject />
        </Route>
      </Switch>

      <p>Footer</p>
    </Router>
  );
}

export default App;

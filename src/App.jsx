import "./App.css";
import { Header } from "./components/code/Header.jsx";
import { Home } from "./components/code/Home.jsx";
import { About } from "./components/code/About.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

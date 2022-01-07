import "./App.css";
import { Header } from "./components/code/Header.jsx";
import  {Home}  from "./components/code/Home.jsx";
import { About } from "./components/code/About.jsx";
import { Contact } from "./components/code/Contact.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App()  {
  return (
      <>
    <Router>
        <Header />
      <Switch>
        <Route exact path="/" render={()=>{
            return (<><Home /></>);
        }}/> 
        <Route exact path="/about" render={()=>{
            return (<><About /></>);
        }}/>
        <Route exact path="/contact" render={()=>{
            return (<><Contact /></>);
        }}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;
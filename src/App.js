import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cocktail from "./Components/Cocktail/Cocktail";
import NotFound from "./Components/NotFound/NotFound";
import CocktailDetails from "./Components/Cocktail/SingleBottle/CocktailDetails/CocktailDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cocktail" component={Cocktail}></Route>
          <Route
            exact
            path="/cocktails/:cocktailId"
            component={CocktailDetails}
          ></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

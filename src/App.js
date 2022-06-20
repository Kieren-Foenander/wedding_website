import Heading from "./components/Heading";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Rsvp from "./Rsvp";
import Info from "./Info";
import Music from "./Music";
import Food from "./Food";
import Gallery from "./Gallery";
import Questions from "./Questions";

function App() {
  

  return (
    <Router>
      <Heading />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

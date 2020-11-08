import "./App.css";
import Nav from "./Layout/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Main from "./pages/Main";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

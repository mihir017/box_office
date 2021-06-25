import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Starred from "./pages/Starred";
import Show from "./pages/Show"
function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
      </Switch>
  );
}

export default App;

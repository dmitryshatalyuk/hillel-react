import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { PagesNav } from "./components/PageNav";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <PagesNav />
        <main className="main">
          <div className="main-content">
            <Switch>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/users/:id" element={<UserDetails />}></Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

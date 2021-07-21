import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/user/:username">
          <Profile />
        </Route>
      </div>
    </Router>
  );
}

export default App;

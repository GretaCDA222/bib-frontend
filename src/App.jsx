import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Films from "./pages/Films";
import Musiques from "./pages/Musiques";
import Header from "./header/header";

function App() {
  return (
    <div className="App">
      
      <h1>Bienvenue au GRETA</h1>
      <Router>
      <Header />
        <Route path="/" exact>
          <Musiques />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
      </Router>
    </div>
  );
}

export default App;

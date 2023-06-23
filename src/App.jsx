import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AuthContext from "./context/auth-context";
import { useAuth } from "./hook/auth-hook"; 

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

import Films from "./pages/Films";
import Musiques from "./pages/Musiques";
import Header from "./header/header";
import NewItem from "./pages/NewItem";
import UpdateItem from "./pages/Update";

function App() {
  const {token, login, logout, userId}  = useAuth()
  return (
    <AuthContext.Provider 
    value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}
    >
    <div className="App">
      
      <h1>Bienvenue au GRETA</h1>
      <Router>
      <Header />
        <Route path="/" exact>
          <Musiques />
        </Route>
        <Route path="/musiques" exact>
          <Musiques />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        {!token && <Route path="/login" component={LoginPage} exact />}
          {token && <Redirect from="/login" to="/" exact /> }
          {!token && <Route path="/signup" component={SignupPage} exact />}
          {token && <Redirect from="/signup" to="/" exact /> }
        <Route path="/musique/new" exact>
          <NewItem route="musiques" />
        </Route>
        <Route path="/film/new" exact>
          <NewItem route="films" />
        </Route>
        <Route path="/update" exact>
          <UpdateItem />
        </Route>
      </Router>
    </div>
    </AuthContext.Provider>  );
}

export default App;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../context/auth-context'

import "./Header.css"

const Header = () => {
  const auth = useContext(AuthContext)
  return (
    <div className="main-header" >
      <ul className="nav-links" >
        <li>
          <NavLink to="/" exact>
            Musiques
          </NavLink>
        </li>
        <li>
          <NavLink to="/films" exact>
            Films
          </NavLink>
        </li>
        <li>
          <NavLink to="/musique/new" exact>
            Ajouter Musique
          </NavLink>
        </li>
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>)}

        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>)}
        {auth.isLoggedIn && (
          <li>
            <button onClick={auth.logout}>Logout</button>
          </li>
        )}
        <li>
          <NavLink to="/film/new" exact>
            Ajouter Film
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

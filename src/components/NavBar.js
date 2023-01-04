import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "gray",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavBar
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavBar>

      <NavBar
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Movies
      </NavBar>

      <NavBar
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Directors
      </NavBar>

      <NavBar
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
        background: "black",
        }}
      >
        Actors
      </NavBar>
    </div>
  )
}

export default NavBar;

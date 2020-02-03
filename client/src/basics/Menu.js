import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/Index";

import { Navbar, Nav, Button } from "react-bootstrap";

const isActive = (history, path) => {
  if (history.location.pathname === path) return {};
  else return {};
};

const Menu = ({ history }) => (
  <div
    style={{
      fontFamily: "IBM Plex Serif",
      color: "#6e6e6dff",
      textDecoration: "none"
    }}
  >
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant=""
      style={{ color: "black", backgroundColor: "#A79080" }}
    >
      {!isAuthenticated() && (
        <>
          <Navbar.Brand>
            <Link style={(isActive(history, "/"), { color: "white" })} to="/">
              My Day
            </Link>
          </Navbar.Brand>

          <Nav.Link>
            <Link
              style={(isActive(history, "/signup"), { color: "white" })}
              to="/signup"
            >
              Sign up
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              style={(isActive(history, "/signin"), { color: "white" })}
              to="/signin"
            >
              Sign in
            </Link>
          </Nav.Link>
        </>
      )}

      {isAuthenticated() && (
        <>
          <Navbar.Brand>
            <Link
              to={`/user/${isAuthenticated().user._id}`}
              style={
                (isActive(history, `/user/${isAuthenticated().user._id}`),
                { color: "black", textDecoration: "none" })
              }
              className="nav-link"
            >
              {`${isAuthenticated().user.firstName}'s profile`}
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            areia-controls="responsive-navbar-nav"
            style={{ backgroundColor: "transparent" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ display: "flex", marginLeft: "auto" }}>
              <Button
                style={isActive(history, "/signout")}
                onClick={() => signout(() => history.push("/"))}
                style={{
                  float: "right",
                  backgroundColor: "#6e6e6dff",
                  border: "none"
                }}
              >
                Sign out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  </div>
);

export default withRouter(Menu);

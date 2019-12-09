import React from "react";
import { withRouter, Link } from "react-router-dom";

const Menu = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Hi, User</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
        {/* Conditional logic for sign in and sign out*/}
        {/** Conditional logic for responsive menu */}
      </ul>
    </nav>
  </div>
);
export default withRouter(Menu);

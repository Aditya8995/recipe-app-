import React from "react";
import { FaHive } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <FaHive />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              scrollBehavior: "smooth",
            }}
            href="#foods"
          >
            Recipes
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

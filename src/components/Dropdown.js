import React from "react";

function Dropdown(){
    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-8">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>...</span>

              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                  Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                  Option 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    )
}
export default Dropdown;
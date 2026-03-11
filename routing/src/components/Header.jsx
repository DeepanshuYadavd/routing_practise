import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div>logo</div>
        <nav>
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/product">
              Product
            </Link>
          </div>
          <div>
            {" "}
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div>
            {" "}
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </nav>

        <div className="auth">
          <div>
            {" "}
            <Link className="link" to="/signin">
              Signin
            </Link>
          </div>
          <div>
            {" "}
            <Link className="link" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

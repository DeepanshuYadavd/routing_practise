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
          <div>About</div>
          <div>Contact</div>
        </nav>

        <div className="auth">
          <div>signin</div>
          <div>signup</div>
        </div>
      </header>
    </>
  );
};

export default Header;

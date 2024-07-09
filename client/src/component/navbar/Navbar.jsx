import React from "react";
import "./navbar.scss"

const Navbar = () => {
    return (
      <>
        <div className="navbar">
          {/* section */}
          <div className="wrapper">
            <span>Chakraborty</span>
            <div className="social">
              <a href="#">
                <img src="" alt="" />
                Links
              </a>
              <a href="#">
                <img src="" alt="" />
                Links
              </a>
              <a href="#">
                <img src="" alt="" />
                Links
              </a>
              <a href="#">
                <img src="" alt="" />
                Links
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;

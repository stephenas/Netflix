import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${show && "header__black"}`}>
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix logo"
        className="header__logo"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix logo"
        className="header__avatar"
      />
    </div>
  );
}

export default Header;

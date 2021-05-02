import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div id="navBar">
      <div id="logo">
        <img src="https://img.icons8.com/material/40/000000/worldwide-location.png" alt="noImage"/>
        <p>TravelSite.com</p>
      </div>

      <div id="searchBar">
        <img src="https://img.icons8.com/windows/32/000000/search--v1.png" alt="noImage"/>
        <input type="text" />
      </div>

      <div id="userSection">
        <img src="https://img.icons8.com/ios-filled/40/000000/change-user-male.png" alt="noImage"/>
        <img src="" alt="" />
        <p>Sanjay Singh</p>
        <img src="https://img.icons8.com/ios-filled/25/000000/google-news.png" alt="noImage"/>
        <img src="https://img.icons8.com/pastel-glyph/28/000000/new-message--v1.png" alt="noImage"/>
        <img src="https://img.icons8.com/material-sharp/28/000000/bell.png" alt="noImage"/>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import searchImg from "../images/search.png";


function Header() {

  return (
    <div className="container">
      <h1 className="name-of-app">Weather forecast</h1>
      <form className="search-info" >
        <input
          type="text"
          name="city"
          placeholder="Enter city"
        />
        <button>
          <img src={searchImg} alt="search-icon" className="search-img" />
        </button>
      </form>
    </div>
  );
}

export default Header;

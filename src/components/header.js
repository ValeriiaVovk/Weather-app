import React from "react";
import searchImg from "../images/search.png";
import { useState } from "react";

function Header(props) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.weatherMethod(city);
    setCity("");
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="name-of-app">Weather forecast</h1>
      <form className="search-info" onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
        />
        <button>
          <img src={searchImg} alt="search-icon" className="search-img" />
        </button>
      </form>
    </div>
  );
}

export default Header;

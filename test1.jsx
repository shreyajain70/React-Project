import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

const Data_API = [
  {
    "timestamp": "2025-04-20T00:00:00Z",
    "location": "New York, USA",
    "moon_angle": 179.3,
    "visibility": 0.92
  },
  {
    "timestamp": "2025-04-20T00:15:00Z",
    "location": "Tokyo, Japan",
    "moon_angle": 182.1,
    "visibility": 0.89
  },
  {
    "timestamp": "2025-04-20T00:30:00Z",
    "location": "Cairo, Egypt",
    "moon_angle": 177.6,
    "visibility": 0.85
  },
  {
    "timestamp": "2025-04-20T00:45:00Z",
    "location": "Sydney, Australia",
    "moon_angle": 180.4,
    "visibility": 0.94
  },
  {
    "timestamp": "2025-04-20T01:00:00Z",
    "location": "Paris, France",
    "moon_angle": 176.9,
    "visibility": 0.81
  }
]

const Header = () => {
  return (
    <>
      <nav className="main-container">
        <div className="logo-container">
          <img className="logo" src="https://www.shutterstock.com/image-vector/moon-logo-design-crescent-above-600nw-1985487665.jpg"></img>
        </div>
        <div className="items">
          <ul className="nav-ul">
            <li className="nav-li">Home</li>
            <li className="nav-li">About Us</li>
            <li className="nav-li">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

const CardList = ({listObj})=>{
  console.log(listObj)
  return(
    <>
    <div className="card-div">
      <h1>{listObj.location}</h1>
      <h5 className="h5-tag">{listObj.timestamp}</h5>
      <div className="h3-container">
      <h3 className="h3-tag">{listObj.moon_angle}</h3>
      <h3 className="h3-tag-visi">{listObj.visibility}</h3>
      </div>
    </div>
    </>
  )
}
const Body = () => {
  const [data] = useState(Data_API);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Data_API);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const handleSearch = () => {
    const filtered = data.filter(card =>
      card.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };


  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      return newMode;
    });
  };

  return (
    <div className="main-card-div">
      <div className="flex-div">
        <div className="searchBar-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((cards, index) => (
          <CardList key={index} listObj={cards} />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No results found.
        </p>
      )}
    </div>
  );
};

const Footer = ()=>{
  return(
      <>
      <footer className="footer">
  <div className="footer-content">
      <p>Copyright © 2025 Apka Page. All rights reserved.</p>
      <p>Contact us: ApkaPage!123@gmail.com</p>

      <div className="social-links">
          <button id="footer-btn">
              <i className="fa-brands fa-facebook"></i><a className="a-footer" href="#">Facebook</a></button>
          <button id="footer-btn">
              <i className="fa-brands fa-twitter"></i><a href="#">Twitter</a></button>
          <button id="footer-btn">
              <i className="fa-brands fa-square-instagram"></i><a href="#">Instagram</a></button>
      </div>
  </div>
</footer>
      </>
  )
}

const App = ()=>{
  return(
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

let Root = createRoot(document.getElementById("root"));
Root.render(<App></App>)
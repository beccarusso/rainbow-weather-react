import logo from './logo.svg';
import './App.css';
import React from "react";
import SearchArea from "./SearchArea";
import MainDisplay from "./MainDisplay";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
     <div className="App">
      <div className="container">
        <div className="card" style={{ width: "25rem" }}>
          <script
            src="https://kit.fontawesome.com/cf78426d14.js"
            crossOrigin="anonymous"
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
            rel="stylesheet"
          />

          <SearchArea />
          <MainDisplay />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}


export default App;

import React from "react";
import App from "../App";
import MainHeader from "../components/MainHeader";

function HomePage() {
  return (
    <header className="header-content">
      <MainHeader />
      <App />
    </header>
  );
}

export default HomePage;

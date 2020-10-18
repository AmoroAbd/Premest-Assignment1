import React from "react";

import Header from "./components/header";
import Content from "./components/content";
import About from "./components/about";
import Banner from "./components/banner";
import Services from "./components/services";
import Contact from "./components/contact";
import Belt from "./components/belt";
import Footer from "./components/footer";
import Copy from "./components/copy";

import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <About />
      <Banner />
      <Services />
      <Contact />
      <Belt />
      <Footer />
      <Copy />
    </div>
  );
}
export default App;

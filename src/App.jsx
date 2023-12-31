/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */

// change name in siteProps object to Rob Gaal
// Create new siteProps object with my info 

const siteProps = {  
  name: "Rob Gaal",
  title: "Web Developer",
  email: "djrogallo@hotmail.com",
  phone: "555-555-5555",
  github: "rogallo",
  twitter: "",
  linkedin: "",
  facebook: "",
  instagram: "",
  pinterest: "",
  address: "123 Main Street, Anytown, USA",
  url: "https://rogallo.github.io/react-portfolio/",
  description: "This is my portfolio site.",
  google_analytics: "UA-000000000-1",
  google_site_verification: "google1234567890",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

// imported react and reactdom from nodemodule folder
import React from './node_modules/react'
import ReactDOM from './node_modules/react-dom';

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing react element inside root
  root.render(container);


  // ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Features***
//  * Created A Server
//  * HMR - Hot Module Replacement -- Auto-Rerendering the page on changes in the code
//  * File Watcher algorithm - C++
//  * BUNDLING
//  * MINIFY
//  * Cleaning our Code
//  * Dev abd Production Build
//  * Super Fast build algorithm
//  * Image Optimization
//  * Caching while development
//  * Compression
//  * Compatible with older version of browser
//  * HTTPS on dev
//  * port Number
//  * Consistent Hashing Algorithm
//  * Zero Config
//  * Tree shaking
//  *
//  *
//  * Transitive Dependencies
 */

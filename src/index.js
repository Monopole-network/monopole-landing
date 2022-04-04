import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/styles.css";

import { Web3ReactProvider } from "@web3-react/core";

import { ethers } from "ethers";

import Layout from "./layouts/Layout.js";

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

ReactDOM.render(
  <HashRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </Web3ReactProvider>
  </HashRouter>,
  document.getElementById("root")
);

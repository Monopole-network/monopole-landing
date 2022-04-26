import React from "react";
import { Route, Routes } from "react-router-dom";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

// chakra imports
import { ChakraProvider } from "@chakra-ui/react";

// core components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import theme from "../theme/theme.js";

import Home from "../views/Home/Home.js";
import PrivacyPolicy from "../views/Pages/PrivacyPolicy.js";
import Legal from "../views/Pages/Legal.js";
import TermsOfUse from "../views/Pages/TermsOfUse.js";
import CodeOfConduct from "../views/Pages/CodeOfConduct";

import Paper from "../views/Pages/Paper.js";

export default function Layout() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
          <Route path="/paper" element={<Paper />} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import "@fontsource/dm-sans";
import "@fontsource/montserrat";

// chakra imports
import { ChakraProvider } from "@chakra-ui/react";
// core components
import UserNavbar from "../components/Navbar/index.js";
import Footer from "../components/Footer/index.js";

import theme from "../theme/theme.js";

import Home from "../views/Home/Home.js";
import PrivacyPolicy from "../views/Pages/PrivacyPolicy.js";
import Legal from "../views/Pages/Legal.js";
import TermsOfUse from "../views/Pages/TermsOfUse.js";

export default function Layout() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <UserNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

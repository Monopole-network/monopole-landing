import React from "react";
import { Route, Routes } from "react-router-dom";
import "@fontsource/dm-sans";
import "@fontsource/montserrat";

// chakra imports
import { ChakraProvider } from "@chakra-ui/react";
// core components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import theme from "../theme/theme.js";

import { Wallet, useWallet } from "../utils/wallet.js";

import Home from "../views/Home/Home.js";
import PrivacyPolicy from "../views/Pages/PrivacyPolicy.js";
import Legal from "../views/Pages/Legal.js";
import TermsOfUse from "../views/Pages/TermsOfUse.js";

import Paper from "../views/Pages/Paper.js";

export default function Layout() {
  const {
    switchNetworkWallet,
    usernameWallet,
    accountWallet,
    networkWallet,
    supportedNetworksWallet,
    connectorsWallet,
    activeWallet,
    errorWallet,
    loadingWallet,
    connectWallet,
    disconnectWallet,
  } = useWallet();

  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <Wallet>
        <Navbar
          switchNetworkWallet={switchNetworkWallet}
          usernameWallet={usernameWallet}
          accountWallet={accountWallet}
          networkWallet={networkWallet}
          supportedNetworksWallet={supportedNetworksWallet}
          connectorsWallet={connectorsWallet}
          activeWallet={activeWallet}
          errorWallet={errorWallet}
          loadingWallet={loadingWallet}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/paper" element={<Paper />} />
        </Routes>
        <Footer />
      </Wallet>
    </ChakraProvider>
  );
}

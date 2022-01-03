import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/dm-sans';
// chakra imports
import { ChakraProvider } from '@chakra-ui/react';
// core components
import UserNavbar from '../components/Navbar/Navbar.js';

import theme from '../theme/theme.js';

import Home from '../views/Home/Home.js';

export default function Layout() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <UserNavbar />
      <Routes>
        <Route path="/" element={<Home />} key="0" />
      </Routes>
    </ChakraProvider>
  );
}

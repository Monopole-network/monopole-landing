import React from "react";
import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { MonopoleIconText, MonopoleIcon } from "../Icons/Icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px="40px" position="fixed" left="0px" right="0px" height="88px">
      <Flex height="100%" alignItems="center" justifyContent="space-between" >
        <Flex>
          <Flex display={{ sm: "none", md: "block", xl: "block" }}>
            <MonopoleIconText height="25px" width="180px" />
          </Flex>
          <Flex display={{ sm: "block", md: "none", xl: "none" }}>
            <MonopoleIcon height="19px" width="43px" />
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

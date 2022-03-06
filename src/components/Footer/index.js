import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { MonopoleIcon } from "../Icons/Icons";

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  let currentYear = new Date().getFullYear();

  return (
    <Box
      px="40px"
      left="0px"
      right="0px"
      height="88px"
      zIndex="2"
      bottom="0px"
      backdropFilter="blur(25px)"
    >
      <Flex height="100%" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Button
            height="43px"
            width="43px"
            background="transparent"
            _hover={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            onClick={() => {
              navigate("/");
            }}
            display={{ sm: "none", md: "contents", lg: "contents" }}
          >
            <MonopoleIcon height="19px" width="43px" />
          </Button>
          <Flex
            alignItems="center"
            display={{ sm: "none", md: "contents", lg: "contents" }}
          >
            <Divider
              ml="20px"
              height="40px"
              width="2px"
              orientation="vertical"
              borderRadius="10px"
              mr="20px"
              bg="#353945"
            />
            <Text fontSize="14px" fontWeight="700">
              Monopole © {currentYear}. All rights reserved
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <ButtonGroup isAttached>
            {/*<Button
              background="transparent"
              borderRadius="50px"
              onClick={() => {
                navigate("/legal");
              }}
            >
              <Text fontSize="14px" fontWeight="700">
                Legal
              </Text>
            </Button>*/}
            <Button
              background="transparent"
              borderRadius="50px"
              onClick={() => {
                navigate("/terms-of-use");
              }}
            >
              <Text fontSize="14px" fontWeight="700">
                Terms of Use
              </Text>
            </Button>
            <Button
              background="transparent"
              borderRadius="50px"
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              <Text fontSize="14px" fontWeight="700">
                Privacy Policy
              </Text>
            </Button>
            <Button
              background="transparent"
              borderRadius="50px"
              onClick={() => {
                navigate("/code-of-conduct");
              }}
            >
              <Text fontSize="14px" fontWeight="700">
                Code of Conduct
              </Text>
            </Button>
            <Button
              background="transparent"
              onClick={toggleColorMode}
              borderRadius="50px"
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
}

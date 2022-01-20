import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { MonopoleIconText, MonopoleIcon } from "../Icons/Icons";
import { Wallet } from "../Wallet/Wallet";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      px="40px"
      position="fixed"
      left="0px"
      right="0px"
      height="88px"
      zIndex="2"
      backdropFilter="blur(25px)"
    >
      {/*todo: navbar*/}
      <Flex height="100%" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Flex display={{ sm: "none", md: "none", lg: "block" }}>
            <MonopoleIconText height="25px" width="180px" />
          </Flex>
          <Flex display={{ sm: "block", md: "block", lg: "none" }}>
            <MonopoleIcon height="19px" width="43px" />
          </Flex>
          <Flex>
            <Divider
              ml="30px"
              height="40px"
              orientation="vertical"
              mr="10px"
              bg="#353945"
              display={{ sm: "none", md: "block", lg: "block" }}
            />
            {/*todo: mobile view*/}
            <ButtonGroup display={{ sm: "none", md: "block", lg: "block" }}>
              <Flex
                justifyContent="center"
                textAlign="center"
                alignItems="center"
              >
                <Button
                  variant="ghost"
                  display={{ sm: "none", md: "block", lg: "block" }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    What is Monopole
                  </Text>
                </Button>
                <Button
                  variant="ghost"
                  display={{ sm: "none", md: "block", lg: "block" }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    Our token
                  </Text>
                </Button>
                <Button
                  variant="ghost"
                  display={{ sm: "none", md: "none", lg: "block" }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    Lite paper
                  </Text>
                </Button>
                <Button
                  variant="ghost"
                  display={{ sm: "none", md: "block", lg: "block" }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    Team
                  </Text>
                </Button>
                <Button
                  variant="ghost"
                  display={{ sm: "none", md: "none", lg: "block" }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    FAQ
                  </Text>
                </Button>
              </Flex>
            </ButtonGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          {/*todo: connect wallet*/}
          <ButtonGroup isAttached>
            <Button
              borderRadius="50px"
              borderLeft="2px solid"
              borderTop="2px solid"
              borderRight="2px solid"
              background="transparent"
              onClick={() => {
                onOpen();
              }}
            >
              <Wallet isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
              <Text fontSize="14px" fontWeight="700">
                Connect Wallet
              </Text>
            </Button>
            <Button
              background="transparent"
              onClick={toggleColorMode}
              borderRight="2px solid"
              borderBottom="2px solid"
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

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
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { MonopoleIconText, MonopoleIcon } from "../Icons/Icons";
import { WalletModal } from "../WalletModal/WalletModal";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Box top="0px" left="0px" right="0px" height="88px"></Box>
      <Box
        px="40px"
        position="fixed"
        left="0px"
        right="0px"
        top="0px"
        height="88px"
        zIndex="2"
        backdropFilter="blur(25px)"
      >
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Flex display={{ sm: "none", md: "none", lg: "block" }}>
              <Button
                height="25px"
                width="180px"
                background="transparent"
                _hover={{ background: "transparent" }}
                _active={{ background: "transparent" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <MonopoleIconText height="25px" width="180px" />
              </Button>
            </Flex>
            <Flex display={{ sm: "block", md: "block", lg: "none" }}>
              <Button
                height="43px"
                width="43px"
                background="transparent"
                _hover={{ background: "transparent" }}
                _active={{ background: "transparent" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <MonopoleIcon height="19px" width="43px" />
              </Button>
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
              <ButtonGroup display={{ sm: "none", md: "block", lg: "block" }}>
                <Flex
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <HashLink
                    to="/#WhatIsMonopole"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                    smooth
                  >
                    <Button
                      variant="ghost"
                      display={{ sm: "none", md: "block", lg: "block" }}
                      _hover={{ background: "transparent" }}
                      borderRadius="25px"
                      _active={{ background: "#03CB88" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        What is Monopole
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to="/#MnplToken"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                    smooth
                  >
                    <Button
                      variant="ghost"
                      display={{ sm: "none", md: "block", lg: "block" }}
                      _hover={{ background: "transparent" }}
                      borderRadius="25px"
                      _active={{ background: "#03CB88" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        Our token
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to="/#LitePaper"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                    smooth
                  >
                    <Button
                      variant="ghost"
                      display={{ sm: "none", md: "none", lg: "block" }}
                      _hover={{ background: "transparent" }}
                      borderRadius="25px"
                      _active={{ background: "#03CB88" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        Lite paper
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to="/#Team"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    smooth
                  >
                    <Button
                      variant="ghost"
                      display={{ sm: "none", md: "block", lg: "block" }}
                      _hover={{ background: "transparent" }}
                      borderRadius="25px"
                      _active={{ background: "#03CB88" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        Team
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to="/#Faq"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    smooth
                  >
                    <Button
                      variant="ghost"
                      display={{ sm: "none", md: "none", lg: "block" }}
                      _hover={{ background: "transparent" }}
                      borderRadius="25px"
                      _active={{ background: "#03CB88" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        FAQ
                      </Text>
                    </Button>
                  </HashLink>
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
                <WalletModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
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
    </>
  );
}

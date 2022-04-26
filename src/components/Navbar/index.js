import React from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Icon,
  Text,
  Link,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { FaRegBell, FaAngleUp, FaAngleDown } from "react-icons/fa";

import { Social } from "../Social";
import { MonopoleIconText, MonopoleIcon } from "../Icons/Icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const menuColor = useColorModeValue("white", "#000126");

  return (
    <>
      <Box top="0px" left="0px" right="0px" height="88px"></Box>
      <Box
        px={{ sm: "20px", md: "30px", lg: "40px" }}
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
                      _active={{ background: "transparent" }}
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
                      _active={{ background: "transparent" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        Our token
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to="/#Documents"
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
                      _active={{ background: "transparent" }}
                    >
                      <Text fontSize="14px" fontWeight="700">
                        Docs
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
                      _active={{ background: "transparent" }}
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
                      _active={{ background: "transparent" }}
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
          <Flex alignItems="center" border="2px solid" borderRadius="50px">
            <Tooltip hasArrow label="Coming soon" shouldWrapChildren mt="3">
              {/*<Link href={"https://app.monopole.network"} isExternal>*/}
              <Button
                borderRadius="50px"
                background="transparent"
                _hover={{ background: "transparent" }}
                _active={{ background: "transparent" }}
                disabled="true"
              >
                <Text fontSize="14px" fontWeight="700" mt="3px">
                  Launch App
                </Text>
              </Button>
              {/*</Link>*/}
            </Tooltip>
            <Menu>
              <MenuButton display={{ sm: "none", md: "block", lg: "block" }}>
                <Button background="transparent" borderRadius="50px">
                  <Icon h="18px" w="18px" as={FaRegBell} mr="10px" />
                  <Flex flexDirection="column">
                    <Icon h="12px" w="12px" as={FaAngleUp} />
                    <Icon h="12px" w="12px" as={FaAngleDown} />
                  </Flex>
                </Button>
              </MenuButton>
              <MenuList
                borderRadius="20px"
                alignItems="center"
                bg={menuColor}
                border="2px solid"
              >
                <Flex flexDirection="column">
                  {Object.keys(Social).map((id) => {
                    return (
                      <Link href={Social[id].link} isExternal>
                        <MenuItem
                          borderRadius="20px"
                          _hover={{ border: "2px solid" }}
                        >
                          <Icon
                            h="18px"
                            w="18px"
                            as={Social[id].logo}
                            mr="10px"
                          />
                          <Text fontSize="md">{Social[id].name}</Text>
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Flex>
              </MenuList>
            </Menu>
            <Button
              background="transparent"
              onClick={toggleColorMode}
              borderRadius="50px"
              _hover={{ background: "transparent" }}
              _active={{ background: "transparent" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

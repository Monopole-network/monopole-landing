import React, { useState } from "react";
// Chakra imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  CircularProgress,
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWallet, FaAngleUp, FaAngleDown } from "react-icons/fa";

import IconBox from "../Icons/IconBox";

// Custom Icons
import { ExitIcon } from "../../components/Icons/Icons";

export function WalletModal(props) {
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
  } = props;

  const modalColor = useColorModeValue("white", "royal");
  const menuColor = useColorModeValue("white", "#000126");

  const [openId, setOpenId] = useState();

  return (
    <Modal
      onClose={props.onClose}
      size="xl"
      isOpen={props.isOpen}
      motionPreset="slideInBottom"
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent borderRadius="25px" bg={modalColor}>
        <ModalHeader>Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {errorWallet && (
            <Alert status="error" mb="36px" borderRadius="15px" overflow>
              <AlertIcon />
              <AlertDescription>{errorWallet}</AlertDescription>
            </Alert>
          )}
          {activeWallet && networkWallet ? (
            <Flex
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                background="transparent"
                onClick={() => {
                  disconnectWallet();
                }}
                borderRadius="50px"
              >
                {usernameWallet ? usernameWallet : accountWallet}
              </Button>
              <Menu>
                <MenuButton>
                  <Button background="transparent" borderRadius="50px">
                    <Image
                      mb="3px"
                      mr="5px"
                      h="20px"
                      w="20px"
                      src={supportedNetworksWallet[networkWallet].logo}
                    />
                    <Flex flexDirection="column" mb="3px">
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
                    {Object.keys(supportedNetworksWallet).map((networkId) => {
                      return (
                        <MenuItem
                          borderRadius="20px"
                          onClick={() => {
                            switchNetworkWallet(networkId);
                          }}
                        >
                          <Image
                            mr="10px"
                            h="25px"
                            w="25px"
                            color="white"
                            src={supportedNetworksWallet[networkId].logo}
                          />
                          <Text fontSize="md">
                            {supportedNetworksWallet[networkId].name}
                          </Text>
                        </MenuItem>
                      );
                    })}
                  </Flex>
                </MenuList>
              </Menu>
              <Button
                background="transparent"
                onClick={() => {
                  disconnectWallet();
                }}
                borderRadius="50px"
              >
                <ExitIcon h="18px" w="18px" />
              </Button>
            </Flex>
          ) : loadingWallet ? (
            <Flex height="100%" alignItems="center" justifyContent="center">
              <CircularProgress
                isIndeterminate
                value={59}
                size="100px"
                thickness="3px"
                color="#03CB88"
              />
            </Flex>
          ) : (
            <Flex w="100%" h="100%" flexDirection="column">
              <Flex
                w="100%"
                h="100%"
                flexDirection="column"
                align="center"
                justifyContent="center"
                mb="18px"
              >
                <Text
                  lineHeight="50px"
                  fontWeight="700"
                  fontFamily="Montserrat"
                >
                  Connect wallet
                </Text>
                <Text w="60%" align="center">
                  Dynamically leverage other's backend metrics without
                  collaborative.
                </Text>
              </Flex>
              <Accordion
                allowToggle
                onChange={(id) => {
                  setOpenId(id);
                }}
              >
                {Object.keys(supportedNetworksWallet).map((networkId) => {
                  return (
                    <AccordionItem
                      mb="20px"
                      borderTop="0"
                      boxShadow="0px 4px 4px 0px #00000040"
                      border="2px solid #8235FF"
                      align="center"
                      borderRadius="16px"
                      id={networkId}
                      opacity={networkId == openId ? "1" : "0.45"}
                      p="15px"
                    >
                      <AccordionButton
                        _hover={{ background: "transaprent" }}
                        _focus={{ boxShadow: "none" }}
                        h="72px"
                      >
                        <Flex justifyContent="space-between" w="100%">
                          <Flex>
                            <Image
                              mt="3px"
                              mr="10px"
                              h="20px"
                              w="20px"
                              src={supportedNetworksWallet[networkId].logo}
                            />
                            <Text
                              fontSize="lg"
                              fontWeight="700"
                              fontFamily="Montserrat"
                            >
                              {supportedNetworksWallet[networkId].name} (
                              {supportedNetworksWallet[networkId].label})
                            </Text>
                          </Flex>
                          <AccordionIcon />
                        </Flex>
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {supportedNetworksWallet[networkId].connectors.map(
                          (connectorsId) => {
                            return (
                              <>
                                <Divider variant="dashed" />
                                <Button
                                  w="100%"
                                  h="38px"
                                  my="10px"
                                  bg="transparent"
                                  mt="10px"
                                  display="flex"
                                  align="center"
                                  justify="center"
                                  _hover={{ background: "transparent" }}
                                  _active={{ background: "transparent" }}
                                  onClick={() => {
                                    connectWallet(networkId, connectorsId);
                                  }}
                                >
                                  <Flex direction="row" w="100%">
                                    <IconBox as="box" h={"30px"} w={"30px"}>
                                      {connectorsWallet[connectorsId].logo ? (
                                        <Image
                                          h={"20px"}
                                          w={"20px"}
                                          color="white"
                                          src={
                                            connectorsWallet[connectorsId].logo
                                          }
                                        />
                                      ) : (
                                        <Icon
                                          h={"20px"}
                                          w={"20px"}
                                          as={FaWallet}
                                        />
                                      )}
                                    </IconBox>
                                    <Flex
                                      direction="column"
                                      justify="center"
                                      textAlign="center"
                                      align="center"
                                      ml="15px"
                                    >
                                      <Text>
                                        {connectorsWallet[connectorsId].name}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </Button>
                              </>
                            );
                          }
                        )}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Flex>
          )}
        </ModalBody>
        <ModalFooter>
          {/*<Button onClick={props.onClose}>Close</Button>*/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

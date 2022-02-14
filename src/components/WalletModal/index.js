import React from "react";
// Chakra imports
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
  Button,
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
  SimpleGrid,
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
                {usernameWallet ? (
                  usernameWallet
                ) : (
                  accountWallet
                )}
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
                <MenuList borderRadius="20px" alignItems="center">
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
            <>loading</>
          ) : (
            <SimpleGrid
              gap="15px"
              columns={{
                sm: "2",
                md: "2",
                lg: "2",
                xl: "2",
              }}
            >
              {Object.keys(supportedNetworksWallet).map((networkId) => {
                return (
                  <Box
                    borderRadius="25px"
                    boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02 )"
                    p="22px"
                  >
                    <Flex flexDirection="row">
                      <Image
                        mr="5px"
                        h="20px"
                        w="20px"
                        src={supportedNetworksWallet[networkId].logo}
                      />
                      <Text fontSize="md">
                        {supportedNetworksWallet[networkId].name} (
                        {supportedNetworksWallet[networkId].label})
                      </Text>
                    </Flex>
                    {supportedNetworksWallet[networkId].connectors.map(
                      (connectorsId) => {
                        return (
                          <Button
                            p="22px"
                            w="100%"
                            mt="5px"
                            display="flex"
                            align="center"
                            justify="center"
                            borderRadius="25px"
                            boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02 )"
                            onClick={() => {
                              connectWallet(networkId, connectorsId);
                            }}
                          >
                            <Flex direction="row" align="center" w="100%">
                              <IconBox as="box" h={"30px"} w={"30px"}>
                                {connectorsWallet[connectorsId].logo ? (
                                  <Image
                                    h={"20px"}
                                    w={"20px"}
                                    color="white"
                                    src={connectorsWallet[connectorsId].logo}
                                  />
                                ) : (
                                  <Icon h={"20px"} w={"20px"} as={FaWallet} />
                                )}
                              </IconBox>
                              <Flex
                                direction="column"
                                justify="center"
                                textAlign="center"
                                align="center"
                                w="100%"
                              >
                                <Text fontSize="sm">
                                  {connectorsWallet[connectorsId].name}
                                </Text>
                              </Flex>
                            </Flex>
                          </Button>
                        );
                      }
                    )}
                  </Box>
                );
              })}
            </SimpleGrid>
          )}
        </ModalBody>
        <ModalFooter>
          {/*<Button onClick={props.onClose}>Close</Button>*/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

import React from "react";
// Chakra imports
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react";

export function WalletModal(props) {
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
      <ModalContent borderRadius="25px" background={modalColor}>
        <ModalHeader>Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>test</ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Connect</Button>
          <Button onClick={props.onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

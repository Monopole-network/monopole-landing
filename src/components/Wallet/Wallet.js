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
} from "@chakra-ui/react";

export function Wallet(props) {
  return (
    <Modal onClose={props.onClose} size="xl" isOpen={props.isOpen} >
      <ModalOverlay />
      <ModalContent borderRadius="25px">
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

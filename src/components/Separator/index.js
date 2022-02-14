import React from "react";
import { Flex } from "@chakra-ui/react";

export function Separator(props) {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      h="2px"
      w="100%"
      background="linear-gradient(270deg, rgba(23, 23, 23, 0) 10.55%, #654CC7 50.12%, #654CC7 54.99%, rgba(23, 23, 23, 0) 83.18%)"
      {...rest}
    >
      {children}
    </Flex>
  );
}

import React from "react";
// Chakra imports
import { Box, Button, Grid, Flex, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }}>
      <Box px="20%" mt="25%" height="70%" width="100%">
        <Text lineHeight="58px" fontSize={{ sm: "44px", md: "54px" }} fontWeight="300" fontFamily="Montserrat">
          Everywhere.
        </Text>
        <Text lineHeight="58px" fontSize={{ sm: "44px", md: "54px" }} fontWeight="700" fontFamily="Montserrat">
          Everyday.
        </Text>
        <Text lineHeight="58px" fontSize={{ sm: "44px", md: "54px" }} fontWeight="900" fontFamily="Montserrat">
          For everyone.
        </Text>
        <Text fontSize={{ sm: "18px", md: "21px" }} py="40px">
          Want to use your crypto for daily life? To buy a car, invest in real
          estate or your next trip ?
        </Text>
        <Flex flexDirection="row" justifyContent="space-between" gap="5%">
          <Button
            borderRadius="16px"
            width="95%"
            height="64px"
            bg="#8235FF"
            color="white"
            _hover={{
              boxShadow: "inset 0 0 15px #03CB88",
            }}
            _active={{
              background: "#03CB88",
            }}
          >
            Discover our project
          </Button>
          <Button
            borderRadius="16px"
            width="95%"
            height="64px"
            opacity="0.75"
            border="2px solid #FFFFFF"
            _hover={{
              boxShadow: "inset 0 0 15px #03CB88",
            }}
            _active={{
              background: "#03CB88",
            }}
          >
            Lite paper
          </Button>
        </Flex>
      </Box>
      <Box width="100%">
        <Text>Everywhere.</Text>
        <Text>Everyday.</Text>
        <Text>For everyone.</Text>
      </Box>
    </Grid>
  );
}

export default Home;

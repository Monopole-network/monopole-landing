import React from "react";
import { useNavigate } from "react-router-dom";

// Chakra imports
import { Box, Button, Grid, Text, Image, AspectRatio } from "@chakra-ui/react";

import { LockIcon } from "../../components/Icons/Icons";

import { PartnersBox } from "../../components/Partners/PartnersBox";

import dualLine from "../../assets/img/dualLine.png";

function LandingVideo() {
  return (
    <>
      <Grid
        mt="-88px"
        templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
        zIndex="1"
        mb="80px"
      >
        <Box
          px={{ sm: "10%", md: "10%", lg: "15%" }}
          mt={{ sm: "30%", md: "25%", lg: "25%" }}
          height="70%"
          width="100%"
          zIndex="1"
        >
          <Text
            lineHeight="24px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="Montserrat"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
          >
            Discover exclusive content
          </Text>
          <Text
            lineHeight="58px"
            fontSize={{ sm: "30px", md: "54px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            mb="40px"
            mt="10px"
          >
            How to invest in an apartment or a house from 1$ thanks to real
            estate tokenization
          </Text>
          <Button
            borderRadius="16px"
            width="100%"
            height="64px"
            minWidth="100px"
            background="#03CB88"
            _hover={{ background: "#04c685" }}
            _active={{
              background: "#048459",
            }}
            /*onClick={() => {
              navigate("/paper");
            }}
            */
          >
            <LockIcon mr="10px" />
            Answer some questions to unlock
          </Button>
        </Box>
        <Box
          pl={{ sm: "10%", md: "0" }}
          pr="10%"
          mt={{ sm: "30%", md: "25%", lg: "25%" }}
          height="70%"
          width="100%"
          zIndex="1"
        >
          <AspectRatio maxW="800px" ratio={16 / 9}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Image
          display={{ sm: "block", md: "block", lg: "block" }}
          src={dualLine}
          width={{ sm: "100%", md: "100%", lg: "72%" }}
          position="absolute"
          top={{ sm: "600px", md: "700px", lg: "0" }}
          right={{ sm: "10%", md: "10%", lg: "0px" }}
          zIndex="0"
        />
      </Grid>
      <PartnersBox />
    </>
  );
}

export default LandingVideo;

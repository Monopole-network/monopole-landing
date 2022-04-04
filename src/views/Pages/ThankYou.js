import React from "react";
import { useNavigate } from "react-router-dom";

// Chakra imports
import {
  Box,
  Button,
  Divider,
  Grid,
  Flex,
  Text,
  Image,
  Icon,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  DividerSVGGrey,
  MonopoleIconWhite,
  LockIcon,
} from "../../components/Icons/Icons";

import { LandingForm } from "../../components/LandingForm/Form";
import { PartnersBox } from "../../components/Partners/PartnersBox";

import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaTelegramPlane,
  FaPenAlt,
  FaDiscord,
} from "react-icons/fa";

import bgImage from "../../assets/img/bgTyp.png";

import financeDIcon from "../../assets/svg/finance.svg";
import investDIcon from "../../assets/svg/invest.svg";
import conciergeDIcon from "../../assets/svg/concierge.svg";
import insuranceDIcon from "../../assets/svg/insurance.svg";
import financeWIcon from "../../assets/svg/financeW.svg";
import investWIcon from "../../assets/svg/investW.svg";
import conciergeWIcon from "../../assets/svg/conciergeW.svg";
import insuranceWIcon from "../../assets/svg/insuranceW.svg";

function LandingVideo() {
  return (
    <>
      <Box
        px={{ sm: "10%", md: "10%", lg: "10%" }}
        height="70%"
        width={{ sm: "100%", md: "70%" }}
        zIndex="10"
        mt="10%"
        pb={{ sm: "40px", md: "150px" }}
      >
        <Text
          lineHeight="24px"
          fontSize="16px"
          fontWeight="700"
          fontFamily="Montserrat"
          color="#FFF"
        >
          You’re in !
        </Text>
        <Text
          lineHeight="58px"
          fontSize={{ sm: "30px", md: "54px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          mb="40px"
          mt="10px"
          zIndex="10"
        >
          Congratulations, <br /> your form have been sent !
        </Text>
        <Flex
          flexDirection={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          gap="5%"
        >
          <Flex w="100%">
            <Button
              borderRadius="16px"
              mb="10px"
              width="100%"
              minWidth="160px"
              height="64px"
              background="#8235FF"
              color="white"
              _active={{
                background: "#03CB88",
              }}
            >
              <Icon h="18px" w="18px" as={FaDiscord} mr="10px" />
              Join the Tribe on Discord
            </Button>
          </Flex>
          <Flex w="100%">
            <Button
              borderRadius="16px"
              mb="10px"
              width="100%"
              height="64px"
              minWidth="100px"
              background="#8235FF"
              _active={{
                background: "#03CB88",
              }}
            >
              <Icon h="18px" w="18px" as={FaTwitter} mr="10px" />
              Join our Twitter
            </Button>
          </Flex>
          <Flex w="100%">
            <Button
              borderRadius="16px"
              mb="10px"
              width="100%"
              height="64px"
              minWidth="100px"
              background="#8235FF"
              zIndex="10"
              _active={{
                background: "#03CB88",
              }}
            >
              <Icon h="18px" w="18px" as={FaInstagram} mr="10px" />
              Follow us on Instagram
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Image
        display={{ sm: "none", md: "block", lg: "block" }}
        src={bgImage}
        width={{ sm: "100%", md: "100%", lg: "55%" }}
        position="absolute"
        top={{ sm: "600px", md: "700px", lg: "50px" }}
        right={{ sm: "10%", md: "10%", lg: "0px" }}
        zIndex="-1"
      />
      <PartnersBox />
    </>
  );
}

export default LandingVideo;

import React from "react";
import { useNavigate } from "react-router-dom";
// Chakra imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Divider,
  Grid,
  SimpleGrid,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Image,
  //Progress,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

//import { Chrono } from "react-chrono";

import { Separator } from "../../components/Separator";
import { Team, Advisors, Partners } from "../../components/Team";
import { Faq } from "../../components/Faq";
//import { Roadmap } from "../../components/Roadmap";
import { Newsletter } from "../../components/Newsletter";

import {
  //  VisaIcon,
  //  PayPalIcon,
  //  MastercardIcon,
  SupportIcon,
  LegalIcon,
  SecurityIcon,
  EthicsIcon,
  AccessibilityIcon,
  SimplicityIcon,
  SupportGradIcon,
  LegalGradIcon,
  SecurityGradIcon,
  EthicsGradIcon,
  AccessibilityGradIcon,
  SimplicityGradIcon,
  DividerSVG,
} from "../../components/Icons/Icons";

import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

import bgCircle from "../../assets/img/bgCircle.png";
import chartMainD from "../../assets/img/chartMainD.png";
import chartMainW from "../../assets/img/chartMainW.png";

import payInCryptoW from "../../assets/img/payInCryptoW.png";
import nftInvestW from "../../assets/img/nftInvestW.png";
import topLevelSupportW from "../../assets/img/topLevelSupportW.png";
import saveTimeW from "../../assets/img/saveTimeW.png";

import payInCryptoD from "../../assets/img/payInCryptoD.png";
import nftInvestD from "../../assets/img/nftInvestD.png";
import topLevelSupportD from "../../assets/img/topLevelSupportD.png";
import saveTimeD from "../../assets/img/saveTimeD.png";

import centralDot from "../../assets/img/centralDot.png";
import shadowDot from "../../assets/img/shadowDot.png";
import dualLine from "../../assets/img/dualLine.png";
import financeDIcon from "../../assets/svg/finance.svg";
import investDIcon from "../../assets/svg/invest.svg";
import conciergeDIcon from "../../assets/svg/concierge.svg";
import insuranceDIcon from "../../assets/svg/insurance.svg";
import financeWIcon from "../../assets/svg/financeW.svg";
import investWIcon from "../../assets/svg/investW.svg";
import conciergeWIcon from "../../assets/svg/conciergeW.svg";
import insuranceWIcon from "../../assets/svg/insuranceW.svg";

import faqD from "../../assets/img/faqD.png";
import faqW from "../../assets/img/faq.svg";

function Home() {
  const cardColor = useColorModeValue("white", "royal");
  //const counterColor = useColorModeValue("white", "royal");
  const faqIcon = useColorModeValue(faqD, faqW);
  const chartMain = useColorModeValue(chartMainW, chartMainD);

  const payInCrypto = useColorModeValue(payInCryptoW, payInCryptoD);
  const nftInvest = useColorModeValue(nftInvestW, nftInvestD);
  const topLevelSupport = useColorModeValue(topLevelSupportW, topLevelSupportD);
  const saveTime = useColorModeValue(saveTimeW, saveTimeD);

  const Support = useColorModeValue(SupportGradIcon, SupportIcon);
  const Legal = useColorModeValue(LegalGradIcon, LegalIcon);
  const Security = useColorModeValue(SecurityGradIcon, SecurityIcon);
  const Ethics = useColorModeValue(EthicsGradIcon, EthicsIcon);

  const Accessibility = useColorModeValue(
    AccessibilityGradIcon,
    AccessibilityIcon
  );

  const Simplicity = useColorModeValue(SimplicityGradIcon, SimplicityIcon);

  const financeIcon = useColorModeValue(financeWIcon, financeDIcon);
  const investIcon = useColorModeValue(investWIcon, investDIcon);
  const conciergeIcon = useColorModeValue(conciergeWIcon, conciergeDIcon);
  const insuranceIcon = useColorModeValue(insuranceWIcon, insuranceDIcon);

  const navigate = useNavigate();

  return (
    <>
      <Grid mt="-88px" templateColumns={{ md: "1fr", lg: "1fr 1fr" }}>
        <Box
          px={{ sm: "10%", md: "10%", lg: "15%" }}
          mt={{ sm: "30%", md: "25%", lg: "25%" }}
          height="70%"
          width="100%"
          zIndex="1"
        >
          <Text
            lineHeight="58px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="300"
            fontFamily="Montserrat"
          >
            Everywhere.
          </Text>
          <Text
            lineHeight="58px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Everyday.
          </Text>
          <Text
            lineHeight="58px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="900"
            fontFamily="Montserrat"
          >
            Everyone.
          </Text>
          <Text fontSize={{ sm: "18px", md: "21px" }} py="40px">
            Want to use your crypto for daily life? To buy a car, invest in real
            estate or your next trip ?
          </Text>
          <Flex flexDirection="row" justifyContent="space-between" gap="5%">
            <Flex w="100%">
              <Button
                borderRadius="16px"
                width="100%"
                minWidth="160px"
                height="64px"
                background="#8235FF"
                color="white"
                _active={{
                  background: "#03CB88",
                }}
                onClick={() => {
                  navigate("/paper");
                }}
              >
                Discover our project
              </Button>
            </Flex>
            <Flex w="100%">
              <Button
                borderRadius="16px"
                width="100%"
                height="64px"
                opacity="0.75"
                minWidth="100px"
                border="2px solid #FFFFFF"
                _active={{
                  background: "#03CB88",
                }}
                onClick={() => {
                  navigate("/paper");
                }}
              >
                Lite paper
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box
          mr={{ sm: "0%", md: "0", lg: "15%" }}
          px={{ sm: "5%", md: "15%", lg: "16%" }}
          mt={{ sm: "40%", md: "25%", lg: "17.5%" }}
          mb={{ sm: "0", md: "0", lg: "-10%" }}
          ml={{ sm: "0", md: "0", lg: "-5%" }}
          zIndex="1"
        >
          <Box
            background={cardColor}
            borderRadius="24px"
            height="534px"
            width="100%"
            minWidth={{ sm: "322px", md: "400px", lg: "400px" }}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              alignItems="center"
            >
              <Text
                lineHeight="25.6px"
                fontSize="21px"
                fontWeight="700"
                fontFamily="Montserrat"
                py="40px"
              >
                Pre-sale
              </Text>

              {/*<Grid
                templateColumns="1fr 1fr 1fr 1fr"
                gap={{ sm: "10px", md: "20px", lg: "30px" }}
                mb="40px"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <Box
                    width="70px"
                    height="70px"
                    background={counterColor}
                    borderRadius="16px"
                  >
                    <Text
                      lineHeight="32px"
                      fontSize="32px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                      py="25%"
                    >
                      29
                    </Text>
                  </Box>
                  <Text
                    lineHeight="18.23px"
                    fontSize="14px"
                    fontWeight="400"
                    py="10px"
                  >
                    day
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <Box
                    width="70px"
                    height="70px"
                    background={counterColor}
                    borderRadius="16px"
                  >
                    <Text
                      lineHeight="32px"
                      fontSize="32px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                      py="25%"
                    >
                      10
                    </Text>
                  </Box>
                  <Text
                    lineHeight="18.23px"
                    fontSize="14px"
                    fontWeight="400"
                    py="10px"
                  >
                    hours
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <Box
                    width="70px"
                    height="70px"
                    background={counterColor}
                    borderRadius="16px"
                  >
                    <Text
                      lineHeight="32px"
                      fontSize="32px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                      py="25%"
                    >
                      55
                    </Text>
                  </Box>
                  <Text
                    lineHeight="18.23px"
                    fontSize="14px"
                    fontWeight="400"
                    py="10px"
                  >
                    minutes
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <Box
                    width="70px"
                    height="70px"
                    background={counterColor}
                    borderRadius="16px"
                  >
                    <Text
                      lineHeight="32px"
                      fontSize="32px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                      py="25%"
                    >
                      13
                    </Text>
                  </Box>
                  <Text
                    lineHeight="18.23px"
                    fontSize="14px"
                    fontWeight="400"
                    py="10px"
                  >
                    secondes
                  </Text>
                </Flex>
              </Grid>*/}
              <Separator width="80%" mt="10%" />
              <Text
                mt="10%"
                lineHeight="25.6px"
                fontSize="21px"
                fontWeight="700"
                fontFamily="Montserrat"
                py="40px"
              >
                Coming soon
              </Text>
              {/*<Progress
                colorScheme="green"
                height="16px"
                width="80%"
                borderRadius="50px"
                value={1}
                isIndeterminate
                mb="40px"
              />*/}
              <Button
                mt="20px"
                mb="20px"
                borderRadius="16px"
                width="50%"
                height="44px"
                background="#03CB88"
                isDisabled={true}
                color="white"
                _active={{
                  background: "#8235FF",
                }}
                disabeled={true}
              >
                Purchase tokens
              </Button>
            </Flex>
          </Box>
        </Box>
      </Grid>
      <Image
        display={{ sm: "block", md: "block", lg: "block" }}
        src={dualLine}
        width={{ sm: "100%", md: "100%", lg: "72%" }}
        position="absolute"
        top={{ sm: "600px", md: "700px", lg: "0" }}
        right={{ sm: "10%", md: "10%", lg: "0px" }}
        zIndex="0"
      />
      <Flex
        flexDirection="row"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        width="100%"
        height="108px"
        mt="137px"
        gap="20%"
        pt="5px"
        zIndex="1"
      >
        {/*<VisaIcon height="65px" width="65px" zIndex="1" />
        <MastercardIcon height="65px" width="65px" zIndex="1" />
        <PayPalIcon height="65px" width="65px" zIndex="1" />*/}
      </Flex>
      <Flex
        id="WhatIsMonopole"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        width="100%"
        mt="60px"
        px="10%"
        zIndex="1"
      >
        <Text
          fontSize="16px"
          fontWeight="700"
          bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
          bgClip="text"
          zIndex="1"
        >
          What is Monopole ?
        </Text>
        <Text
          mt="4px"
          mb="60px"
          fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          px={{ sm: "0%", md: "20%", lg: "20%" }}
          zIndex="1"
        >
          We’ve built a global ecosystem to use your crypto in your daily life.
        </Text>
        <Flex flexDirection="column" width="100%">
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            mb="60px"
          >
            <Flex>
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                >
                  <Image src={financeIcon} w="110px" h="110px" mb="26px" />
                  <Flex direction="column">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Finance
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Your financial diversification associated with blockchain
                      management.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider
                orientation="vertical"
                height="350px"
                display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
              />
            </Flex>
            <Flex mb="54px">
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                >
                  <Image src={investIcon} w="110px" h="110px" mb="26px" />
                  <Flex direction="column">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Invest
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      You invest what you own without going into debt. You
                      choose according to your income, at the right time, with a
                      minimum of risk. You see all your investments in real
                      time, in one place.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider
                orientation="vertical"
                height="350px"
                display={{ sm: "none", md: "none", lg: "none", xl: "block" }}
              />
            </Flex>
            <Flex>
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                >
                  <Image src={conciergeIcon} w="110px" h="110px" mb="26px" />
                  <Flex direction="column">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Concierge
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Your needs in goods and services with verified
                      partnerships with major players for maximum security,
                      agility and sustainability.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider
                orientation="vertical"
                height="350px"
                display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
              />
            </Flex>
            <Flex>
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                >
                  <Image src={insuranceIcon} w="110px" h="110px" mb="26px" />
                  <Flex direction="column">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Insurance policies
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Whether it is blockchain or for your daily uses, will
                      allow you to be both insured and insurer at the same time.
                      It covers all your needs, is accessible and secure. It
                      will revolutionise traditional insurance.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
      <Flex flexDirection="column" width="100%" mt="30px" px="10%">
        <Flex
          flexDirection="column"
          pl={{ sm: "0%", md: "7%", lg: "11%", xl: "6%" }}
          pr={{ sm: "20%", md: "40%", lg: "50%" }}
          zIndex="1"
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="180px"
          >
            Why choose our token ?
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Use your crypto everyday, everywhere, anytime.
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          mt="60px"
          zIndex="1"
        >
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Simplicity w="64px" h="64px" mb="30px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Simplicity
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    As we are a complete ecosystem and not an isolated project,
                    we work in synergy to facilitate your investments. A single
                    contact for everything! In 3 clicks and that's it.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider
              orientation="vertical"
              display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
            />
          </Flex>
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Support w="64px" h="64px" mb="26px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Support
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    We have a recognized contract as a business contributor.
                    Everything is not dematerialized, you are surrounded to
                    better invest and better consume by people whose objective
                    is to help you choose and optimize your investments!
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider
              orientation="vertical"
              display={{ sm: "none", md: "none", lg: "none", xl: "block" }}
            />
          </Flex>
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Legal w="64px" h="64px" mb="26px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Legal conformity
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    You can invest anywhere in the world without having to
                    travel and in all legality. Monopole allows international,
                    filtered, secure and easy investments.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider
              orientation="vertical"
              display={{ sm: "none", md: "block", lg: "block", xl: "none" }}
            />
          </Flex>
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Security w="64px" h="64px" mb="30px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Security
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    Monopole does not depend on one blockchain but is present on
                    more than 4 blockchains at the same time. This diversity
                    allows us to minimize risk and congestion through
                    cross-chain, for less transaction costs, less disruption and
                    maximized security.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider
              orientation="vertical"
              display={{ sm: "none", md: "none", lg: "none", xl: "block" }}
            />
          </Flex>
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Ethics w="64px" h="64px" mb="26px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Ethics & Responsability
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    We are on an ecologically neutral blockchain for a reduced
                    carbon footprint of investments. Monopole donates 0.5% of
                    its earnings to a foundation dedicated to decarbonization.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider
              orientation="vertical"
              display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
            />
          </Flex>
          <Flex mb="50px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" width="262px" height="350px">
                <Accessibility w="64px" h="64px" mb="26px" />
                <Flex direction="column">
                  <Text
                    mb="20px"
                    lineHeight="24px"
                    fontSize="18px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                  >
                    Accessibility
                  </Text>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                    We offer premium services that can be accessed anywhere,
                    from any device, at any time. You can use the Monopole card
                    with partners via Metamask wallets and others. Soon, a
                    withdrawal card!
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
        <Image
          src={shadowDot}
          position="absolute"
          zIndex="0"
          left="0"
          mt="100px"
        />
      </Flex>
      <Flex
        flexDirection="column"
        width="100%"
        mt="130px"
        zIndex="1"
        mb="280px"
      >
        <Flex
          flexDirection="column"
          zIndex="1"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          px="10%"
        >
          <Text fontSize="16px" fontWeight="700" width="180px">
            Want to know more ?
          </Text>
          <Text
            mt="5px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Discover our lite paper
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Here is our full documents that help you to understand deeply about
            us and our project
          </Text>
          <Button
            mt="32px"
            borderRadius="16px"
            width="20%"
            height="64px"
            background="#03CB88"
            color="white"
            minWidth="160px"
            _active={{
              background: "#8235FF",
            }}
            zIndex="1"
            onClick={() => {
              navigate("/paper");
            }}
          >
            Lite paper
          </Button>
        </Flex>
        <Flex
          mt="-100px"
          zIndex="0"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={centralDot} position="absolute" zIndex="0" />
        </Flex>
      </Flex>
      <Flex
        id="LitePaper"
        flexDirection="column"
        width="100%"
        zIndex="1"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        px={{ sm: "5%", md: "10%", lg: "15%" }}
      >
        <Text
          fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          zIndex="1"
        >
          Discover the freedom to choose, invest, manage and use your crypto, in
          your daily life!
        </Text>
      </Flex>
      <SimpleGrid
        mt="280px"
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex
          flexDirection="column"
          zIndex="1"
          mt="10%"
          pl={{ sm: "10%", md: "15%", lg: "20%" }}
          pr={{ sm: "10%", md: "10%", lg: "10%" }}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="75px"
          >
            Save time
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            A unique, intuitive platform, available everywhere
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            A unique, intuitive platform, available everywhere, that offers you
            full visibility on acquisitions and assets recognized in your
            country thanks to an international presence. From your home, in just
            a few clicks, you can diversify your portfolio in a decentralized
            manner and optimize your returns.
          </Text>
        </Flex>
        <Flex zIndex="0" pt={{ sm: "50px", md: "50px", lg: "50px", xl: "0px" }}>
          <Image src={saveTime} right="0px" position="absolute" zIndex="0" />
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        mt={{ sm: "75%", md: "80%", lg: "500px", xl: "280px" }}
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex
          zIndex="0"
          pt={{ sm: "350px", md: "350px", lg: "400px", xl: "0" }}
        >
          <Image
            src={topLevelSupport}
            left="0px"
            position="absolute"
            zIndex="0"
          />
        </Flex>
        <Flex
          flexDirection="column"
          zIndex="1"
          mt={{ sm: "-350px", md: "-350px", lg: "-300px", xl: "110px" }}
          pl={{ sm: "10%", md: "15%", lg: "10%" }}
          pr={{ sm: "10%", md: "10%", lg: "20%" }}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="128px"
          >
            Top level support
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            Benefit from experienced, human and reactive support
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            You are surrounded and advised by an expert and available team.
            Monopole changes your daily life by finding, selecting and verifying
            investments and by offering you full visibility and control of its
            investments.
          </Text>
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        mt={{ sm: "350px", md: "500px", lg: "500px", xl: "280px" }}
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex
          flexDirection="column"
          zIndex="1"
          mt={{ sm: "0%", md: "0%", lg: "0%", xl: "160px" }}
          pl={{ sm: "10%", md: "15%", lg: "20%" }}
          pr={{ sm: "10%", md: "10%", lg: "10%" }}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="220px"
          >
            Verified investments & NFT’s
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            Enjoy verified investments and make them grow with NFT
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            You buy a real asset or share and receive it in NFTs.
          </Text>
        </Flex>
        <Flex zIndex="0" pt={{ sm: "50px", md: "50px", lg: "50px", xl: "0px" }}>
          <Image src={nftInvest} right="0px" position="absolute" zIndex="0" />
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        mt={{ sm: "75%", md: "80%", lg: "500px", xl: "280px" }}
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex
          zIndex="0"
          pt={{ sm: "350px", md: "350px", lg: "400px", xl: "0" }}
        >
          <Image src={payInCrypto} left="0px" position="absolute" zIndex="0" />
        </Flex>
        <Flex
          flexDirection="column"
          zIndex="1"
          mt={{ sm: "-350px", md: "-350px", lg: "-300px", xl: "150px" }}
          pl={{ sm: "10%", md: "15%", lg: "10%" }}
          pr={{ sm: "10%", md: "10%", lg: "20%" }}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="128px"
          >
            Pay in crypto
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            Access everything you need, pay in crypto
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Local and international crypto friendly player partners that allow
            you to access verified services to use your crypto for all your
            needs.
          </Text>
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        id="MnplToken"
        mt={{ sm: "80%", md: "70%", lg: "60%", xl: "30%" }}
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex flexDirection="column">
          <Text
            mb="50px"
            pl={{ sm: "10%", md: "15%", lg: "20%" }}
            pr={{ sm: "10%", md: "15%", lg: "20%" }}
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            Funding allocation
          </Text>
          <Flex
            zIndex="0"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
            w="100%"
          >
            <Image src={chartMain} left="0px" zIndex="0" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          zIndex="1"
          pl={{ sm: "10%", md: "15%", lg: "10%" }}
          pr={{ sm: "10%", md: "10%", lg: "20%" }}
        >
          <Text
            mt="24px"
            fontSize="21px"
            fontWeight="400"
            fontFamily="Montserrat"
            lineHeight="25.6px"
            mb="50px"
          >
            Token allocation
          </Text>
          <Flex
            flexDirection="column"
            zIndex="1"
            w="100%"
            justifyContent="center"
            h="100%"
          >
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              PS1: 4 %
            </Text>
            <Divider
              height="6px"
              width="4%"
              borderRadius="10px"
              bg="#00ce88"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              PS2: 8%
            </Text>
            <Divider
              height="6px"
              width="8%"
              borderRadius="10px"
              bg="#51d05a"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              PS3: 14%
            </Text>
            <Divider
              height="6px"
              width="14%"
              borderRadius="10px"
              bg="#3cb746"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              ICO: 3%
            </Text>
            <Divider
              height="6px"
              width="3%"
              borderRadius="10px"
              bg="#2c6e97"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Airdrop: 2 %
            </Text>
            <Divider
              height="6px"
              width="2%"
              borderRadius="10px"
              bg="#a0bed5"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Liquidity Providing: 13 %
            </Text>
            <Divider
              height="6px"
              width="13%"
              borderRadius="10px"
              bg="#f9b81c"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Founders: 13 %
            </Text>
            <Divider
              height="6px"
              width="13%"
              borderRadius="10px"
              bg="#ecd288"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Advisors & Rewards: 3 %
            </Text>
            <Divider
              height="6px"
              width="3%"
              borderRadius="10px"
              bg="#e74d79"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Development: 10 %
            </Text>
            <Divider
              height="6px"
              width="10%"
              borderRadius="10px"
              bg="#8336fa"
              mb="10px"
            />
            <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
              Foundation: 30 %
            </Text>
            <Divider
              height="6px"
              width="30%"
              borderRadius="10px"
              bg="#4d04b9"
              mb="10px"
            />
          </Flex>
        </Flex>
      </SimpleGrid>
      <Flex flexDirection="column" zIndex="0" w="100%" mt="100px">
        <DividerSVG w="100%" h="100%" zIndex="0" />
      </Flex>
      <Flex flexDirection="column" w="100%" pt="20px" background="white">
        <Flex
          zIndex="0"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          w="100%"
        >
          {/*
          <Text
            lineHeight="54px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            color="black"
          >
            Roadmap
          </Text>
          <Flex
            mt="100px"
            w="100%"
            px={{ sm: "0%", md: "10%", lg: "20%" }}
            mb="100px"
            color="black"
          >
            <Chrono
              items={Roadmap}
              mode="HORIZONTAL"
              borderLessCards={true}
              slideShow={true}
              slideItemDuration={3000}
              lineWidth="4"
              cardWidth="300"
              theme={{
                primary: "#03CB88",
                secondary: "#03CB88",
                titleColor: "black",
                color: "black",
              }}
            >
              {Object.keys(Roadmap).map((id) => {
                return (
                  <Text mb="10px" fontSize="16px" fontWeight="700" zIndex="1">
                    {Roadmap[id].text}
                  </Text>
                );
              })}
            </Chrono>
          </Flex>
        */}
          <Text
            id="Team"
            lineHeight="54px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            color="black"
            mb="65px"
          >
            Real people behind
          </Text>
          <Grid
            w="100%"
            px={{ sm: "5%", md: "10%", lg: "15%" }}
            templateColumns={{
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            mb="65px"
            gap={{ sm: "20px", md: "30px" }}
          >
            {Object.keys(Team).map((id) => {
              return (
                <Box maxW="sm">
                  <Flex
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Link href={Team[id].link} isExternal>
                      <Image
                        borderRadius="full"
                        w="128px"
                        name={Team[id].name}
                        src={Team[id].img}
                        mb="20px"
                      />
                      <Text
                        lineHeight="24px"
                        fontSize="16px"
                        fontWeight="700"
                        color="black"
                      >
                        {Team[id].name}
                      </Text>
                      <Text
                        lineHeight="21px"
                        fontSize="14px"
                        fontWeight="700"
                        color="black"
                        maxW="128px"
                      >
                        {Team[id].rank}
                      </Text>
                    </Link>
                    <Flex gap="10px" flexDirection="row">
                      {Team[id].twitter && (
                        <Link href={Team[id].twitter} isExternal>
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Team[id].linkedin && (
                        <Link href={Team[id].linkedin} isExternal>
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Team[id].instagram && (
                        <Link href={Team[id].instagram} isExternal>
                          <FaInstagram color="black" />
                        </Link>
                      )}
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Grid>
          <Text
            lineHeight="54px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            color="black"
            mb="65px"
          >
            Advisors
          </Text>
          <Grid
            w="100%"
            templateColumns={{
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            mb="70px"
            gap={{ sm: "20px", md: "30px" }}
            px={{ sm: "5%", md: "10%", lg: "15%" }}
          >
            {Object.keys(Advisors).map((id) => {
              return (
                <Box maxW="sm">
                  <Flex
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Link href={Advisors[id].link} isExternal>
                      <Image
                        borderRadius="full"
                        w="128px"
                        name={Advisors[id].name}
                        src={Advisors[id].img}
                        mb="20px"
                      />
                      <Text
                        lineHeight="24px"
                        fontSize="16px"
                        fontWeight="700"
                        color="black"
                      >
                        {Advisors[id].name}
                      </Text>
                      <Text
                        lineHeight="21px"
                        fontSize="14px"
                        fontWeight="700"
                        color="black"
                        maxW="128px"
                      >
                        {Advisors[id].rank}
                      </Text>
                    </Link>
                    <Flex gap="10px" flexDirection="row">
                      {Advisors[id].twitter && (
                        <Link href={Advisors[id].twitter} isExternal>
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Advisors[id].linkedin && (
                        <Link href={Advisors[id].linkedin} isExternal>
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Advisors[id].instagram && (
                        <Link href={Advisors[id].instagram} isExternal>
                          <FaInstagram color="black" />
                        </Link>
                      )}
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Grid>
          <Text
            lineHeight="54px"
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            color="black"
            mb="65px"
          >
            Partners
          </Text>
          <Grid
            w="100%"
            templateColumns={{
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            mb="70px"
            gap={{ sm: "20px", md: "30px" }}
            px={{ sm: "5%", md: "10%", lg: "15%" }}
          >
            {Object.keys(Partners).map((id) => {
              return (
                <Box maxW="sm">
                  <Flex
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Link href={Partners[id].link} isExternal>
                      <Image
                        borderRadius="full"
                        w="128px"
                        name={Partners[id].name}
                        src={Partners[id].img}
                        mb="20px"
                      />
                      <Text
                        lineHeight="24px"
                        fontSize="16px"
                        fontWeight="700"
                        color="black"
                      >
                        {Partners[id].name}
                      </Text>
                      <Text
                        lineHeight="21px"
                        fontSize="14px"
                        fontWeight="700"
                        color="black"
                        maxW="128px"
                      >
                        {Partners[id].rank}
                      </Text>
                    </Link>
                    <Flex gap="10px" flexDirection="row">
                      {Partners[id].twitter && (
                        <Link href={Partners[id].twitter} isExternal>
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Partners[id].linkedin && (
                        <Link href={Partners[id].linkedin} isExternal>
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Partners[id].instagram && (
                        <Link href={Partners[id].instagram} isExternal>
                          <FaInstagram color="black" />
                        </Link>
                      )}
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
      <SimpleGrid
        id="Faq"
        mt="85px"
        columns={{
          sm: "1",
          md: "1",
          lg: "1",
          xl: "2",
        }}
      >
        <Flex
          flexDirection="column"
          zIndex="1"
          mt="10%"
          px={{ sm: "5%", md: "10%", lg: "12%" }}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="180px"
          >
            We speak your language
          </Text>
          <Text
            mb="30px"
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight="54px"
          >
            Frequently asked questions
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray">
            <TabList gap="25px" mb="30px">
              {Object.keys(Faq).map((id) => {
                return <Tab>{Faq[id].category}</Tab>;
              })}
            </TabList>
            <TabPanels>
              {Object.keys(Faq).map((id) => {
                return (
                  <TabPanel>
                    <Accordion allowToggle defaultIndex={[0]}>
                      {Object.keys(Faq[id].questions).map((index) => {
                        return (
                          <AccordionItem
                            mb="20px"
                            borderTop="0"
                            borderBottom="1px"
                            pb="20px"
                          >
                            <AccordionButton
                              _hover={{ background: "transaprent" }}
                            >
                              <Box flex="1" textAlign="left">
                                {Faq[id].questions[index].question}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {Faq[id].questions[index].response}
                            </AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Flex>
        <Flex
          zIndex="0"
          pt={{ sm: "50px", md: "50px", lg: "50px", xl: "0px" }}
          display={{ sm: "none", md: "none", lg: "none", xl: "block" }}
        >
          <Image src={faqIcon} right="0px" position="absolute" zIndex="0" />
        </Flex>
      </SimpleGrid>
      <Flex
        flexDirection="column"
        width="100%"
        height="491px"
        mt="250px"
        backgroundImage={bgCircle}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          px="10%"
          pt="100px"
          color="black"
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            width="85px"
          >
            Stay tuned
          </Text>
          <Text
            mt="8px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Never miss a news
          </Text>
          <Text
            mt="20px"
            mb="20px"
            fontSize="18px"
            fontWeight="400"
            maxW="600px"
          >
            Don’t hesitate to subscribe to latest news about MONOPOLE as well as
            crucial financial knowledge to become successful investor globally
          </Text>
          <Newsletter
            color="#0C0E47"
            borderColor="#000131"
            buttonColor="#8235FF"
            mailChimpURL="https://network.us20.list-manage.com/subscribe/post?u=2b2c4e861a24bb799b68bcf93&id=aebe886589"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Home;

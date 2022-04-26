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
  Link,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Chrono } from "react-chrono";

import { motion } from "framer-motion";

import { Social } from "../../components/Social";
import { Team, Advisors, Partners } from "../../components/Team";
import { Faq } from "../../components/Faq";
import { Roadmap } from "../../components/Roadmap";
import { Newsletter } from "../../components/Newsletter";

import {
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

import { PartnersBox } from "../../components/Partners/PartnersBox";

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

import purpleArc from "../../assets/img/purpleArc.png";
import pinkArc from "../../assets/img/pinkArc.png";
import mockup from "../../assets/img/mockup.png";

function Home(props) {
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
  const menuColor = useColorModeValue("white", "#000126");
  const partnersColor = useColorModeValue("#000126", "transaprent");
  /*
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
*/
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
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="300"
            fontFamily="Montserrat"
          >
            Sustainable
          </Text>
          <Text
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Profitable
          </Text>
          <Text
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
            fontSize={{ sm: "34px", md: "44px" }}
            fontWeight="black"
            fontFamily="Montserrat"
          >
            Future
          </Text>
          <Text
            fontWeight="300"
            fontFamily="Montserrat"
            fontSize={{ sm: "12px", md: "15px" }}
          >
            by builders and investors community.
          </Text>
          <Flex py="20px" flexDirection="column">
            <Text fontSize={{ sm: "15px", md: "18px" }}>
              The first sustainable investment DAO.
            </Text>
            <Text fontSize={{ sm: "15px", md: "18px" }}>
              Invest on 11+ already active diversifications.
            </Text>
          </Flex>
          <Flex
            flexDirection={{ sm: "column", md: "row", lg: "row" }}
            justifyContent={{
              sm: "center",
              md: "space-between",
              lg: "space-between",
            }}
            gap={{ sm: "10px", md: "10px", lg: "10px" }}
          >
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
              <Menu>
                <MenuButton
                  borderRadius="16px"
                  width="100%"
                  height="64px"
                  minWidth="160px"
                >
                  <Button
                    borderRadius="16px"
                    width="100%"
                    height="64px"
                    opacity="0.75"
                    minWidth="160px"
                    border="2px solid #FFFFFF"
                    _active={{
                      background: "#03CB88",
                    }}
                  >
                    Join our Community
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
            </Flex>
          </Flex>
        </Box>
        <Box
          display={{ sm: "block", md: "block", lg: "block" }}
          height="70%"
          width={{ sm: "100%", md: "100%", lg: "80%" }}
          mr={{ sm: "0px", md: "0px", lg: "15%" }}
          px={{ sm: "5%", md: "15%", lg: "16%" }}
          mt={{ sm: "10%", md: "10%", lg: "15%" }}
          mb={{ sm: "0px", md: "0px", lg: "-8%" }}
          ml={{ sm: "0px", md: "0px", lg: "-5%" }}
          zIndex="1"
        >
          <motion.div
            animate={{ rotate: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <Image zIndex="1" src={mockup} />
          </motion.div>
        </Box>
      </Grid>
      <Flex
        display={{ sm: "block", md: "block", lg: "block" }}
        width={{ sm: "100%", md: "100%", lg: "64%" }}
        position="absolute"
        top={{ sm: "600px", md: "700px", lg: "0" }}
        right={{ sm: "0px", md: "0px", lg: "0px" }}
        zIndex="0"
      >
        <motion.div
          animate={{ rotate: [8, 0, 8] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Image
            src={pinkArc}
            width={{ sm: "100%", md: "100%", lg: "100%" }}
            position="absolute"
            zIndex="0"
          />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Image
            src={purpleArc}
            width={{ sm: "100%", md: "100%", lg: "100%" }}
            position="absolute"
            zIndex="0"
          />
        </motion.div>
      </Flex>
      <PartnersBox
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        width="100%"
        height="108px"
        mt="125px"
        zIndex="1"
        backdropFilter="blur(1px)"
        //borderTop="4px solid #03CB88"
        //borderBottom="4px solid #03CB88"
      />
      <Flex height="66px" mt="-77px" width="100%" background={partnersColor} />
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
          mt="15px"
          mb="60px"
          fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          px={{ sm: "0%", md: "15%", lg: "15%" }}
          zIndex="1"
          lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
        >
          Community asset diversification platform with socially responsible and
          profitable values
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
                      Diversify
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Invest in projects of different types like real estate,
                      start-ups or movies, and 11+ more. All this while
                      remaining on blockchain ecosystem.
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
                      DAO
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Keep control of your investments by voting for the
                      strategic choices on these. With the DAO you can propose
                      changes to your investments like improvements on a
                      property.
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
                      International
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Investments will be in several countries, you can invest
                      in a property on the other side of the world and expose
                      yourself to different markets.
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
                      Proof of Property
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      Investments will be backed by proof in blockchain like
                      token or nft and you will be the sole owner of your
                      investment.
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
            width="150px"
          >
            Who is Monopole ?
          </Text>
          <Text
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Values, and many others
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
                    Monopole ensures that the proposed investments are viable.
                    The entire ecosystem will be audited by external companies.
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
        mb="350px"
        flexDirection="column"
        width="100%"
        mt="170px"
        zIndex="1"
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
          <Link
            href={
              "https://github.com/Monopole-network/monopole-ui/raw/main/src/assets/pdf/litepaper.pdf"
            }
            width="20%"
            height="64px"
            minWidth="160px"
            isExternal
            target="_blank"
            _focus={{ boxShadow: "none" }}
          >
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
                //  navigate("/paper");
              }}
            >
              Lite paper
            </Button>
          </Link>
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
      <Flex id="Documents"> </Flex>
      <SimpleGrid
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
            width="85px"
          >
            Save time
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
          >
            All your assets, available everywhere on all devices
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
            width="130px"
          >
            Top community
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
          >
            Express yourself
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Vote and own your investments, choose or make a proposal on the DAO
            to increase the profitability of your investment. The benefits of a
            human and community experience on the selection of the
            diversification and the support
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
            width="200px"
          >
            Verified investments
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
          >
            Enjoy verified investments and diversify
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Whether you choose the NFT or Token strategy, grow your investment.
            Secure your assets with multi-strategy, choose between Token and
            NFT. Buy, Swap, Sell or Hodl easly
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
            Pay in $MNPL
          </Text>
          <Text
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
          >
            Access everything you need, pay on Monopole
          </Text>
          <Text
            mt="16px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Montserrat"
          >
            Use your cryptocurrencies in daily life, enjoy our premium services
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
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
          <Flex
            mt="74px"
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
          <Text
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
            px={{ sm: "0%", md: "15%", lg: "30%" }}
            mb="100px"
            color="black"
            py="5px"
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
                  <Text
                    mb="10px"
                    fontSize="16px"
                    fontWeight="700"
                    zIndex="1"
                    flexDirection="center"
                    align="center"
                  >
                    {Roadmap[id].text}
                  </Text>
                );
              })}
            </Chrono>
          </Flex>
          <Text
            id="Team"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
                    <Link
                      href={Team[id].link}
                      isExternal
                      _focus={{ boxShadow: "none" }}
                    >
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
                        <Link
                          href={Team[id].twitter}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Team[id].linkedin && (
                        <Link
                          href={Team[id].linkedin}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Team[id].instagram && (
                        <Link
                          href={Team[id].instagram}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
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
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
                    <Link
                      href={Advisors[id].link}
                      isExternal
                      _focus={{ boxShadow: "none" }}
                    >
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
                        <Link
                          href={Advisors[id].twitter}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Advisors[id].linkedin && (
                        <Link
                          href={Advisors[id].linkedin}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Advisors[id].instagram && (
                        <Link
                          href={Advisors[id].instagram}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
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
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
                    <Link
                      href={Partners[id].link}
                      isExternal
                      _focus={{ boxShadow: "none" }}
                    >
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
                        <Link
                          href={Partners[id].twitter}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaTwitter color="black" />
                        </Link>
                      )}
                      {Partners[id].linkedin && (
                        <Link
                          href={Partners[id].linkedin}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
                          <FaLinkedin color="black" />
                        </Link>
                      )}
                      {Partners[id].instagram && (
                        <Link
                          href={Partners[id].instagram}
                          isExternal
                          _focus={{ boxShadow: "none" }}
                        >
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
            width="200px"
          >
            We speak your language
          </Text>
          <Text
            mb="30px"
            mt="4px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            lineHeight={{ sm: "30px", md: "40px", lg: "50px" }}
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
                              _focus={{ boxShadow: "none" }}
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

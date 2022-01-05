import React from "react";
// Chakra imports
import {
  Box,
  Button,
  Divider,
  Grid,
  Flex,
  Text,
  Image,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";

import { Separator } from "../../components/Separator/Separator";

import {
  VisaIcon,
  PayPalIcon,
  MastercardIcon,
  SimplicityIcon,
  SupportIcon,
  LegalIcon,
  SecurityIcon,
  EthicsIcon,
  AccessibilityIcon,
} from "../../components/Icons/Icons";

import centralDot from "../../assets/img/centralDot.png";
import shadowDot from "../../assets/img/shadowDot.png";
import dualLine from "../../assets/img/dualLine.png";
import financeIcon from "../../assets/svg/finance.svg";
import investIcon from "../../assets/svg/invest.svg";
import conciergeIcon from "../../assets/svg/concierge.svg";
import insuranceIcon from "../../assets/svg/insurance.svg";

function Home() {
  const cardColor = useColorModeValue("transparent", "transparent");
  const cardBlurColor = useColorModeValue("blur(200px)", "blur(200px)");
  const counterColor = useColorModeValue("white", "royal");
  const bannerColor = useColorModeValue("transparent", "#0D0941");
  const bannerBlurColor = useColorModeValue("blur(50px)", "0");
  return (
    <>
      <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }}>
        <Box px="20%" mt="25%" height="70%" width="100%" zIndex="1">
          <Text
            lineHeight="58px"
            fontSize={{ sm: "44px", md: "54px" }}
            fontWeight="300"
            fontFamily="Montserrat"
          >
            Everywhere.
          </Text>
          <Text
            lineHeight="58px"
            fontSize={{ sm: "44px", md: "54px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            Everyday.
          </Text>
          <Text
            lineHeight="58px"
            fontSize={{ sm: "44px", md: "54px" }}
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
            <Button
              borderRadius="16px"
              width="95%"
              minWidth="160px"
              height="64px"
              background="#8235FF"
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
        <Box
          mr={{ sm: "0%", md: "0", lg: "15%" }}
          px={{ sm: "15%", md: "15%", lg: "16%" }}
          mt={{ sm: "30%", md: "25%", lg: "17.5%" }}
          mb={{ sm: "0", md: "0", lg: "-10%" }}
          ml={{ sm: "0", md: "0", lg: "-5%" }}
          zIndex="1"
        >
          <Box
            background={cardColor}
            borderRadius="24px"
            backdropFilter={cardBlurColor}
            height="534px"
            width="100%"
            minWidth={{ sm: "330px", md: "400px", lg: "400px" }}
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
                Pre-sale is live now
              </Text>

              <Grid
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
                    width="72px"
                    height="72px"
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
                    width="72px"
                    height="72px"
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
                    width="72px"
                    height="72px"
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
                    width="72px"
                    height="72px"
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
              </Grid>
              <Separator width="80%" />
              <Text
                lineHeight="25.6px"
                fontSize="21px"
                fontWeight="700"
                fontFamily="Montserrat"
                py="40px"
              >
                Pre-sale
              </Text>
              <Progress
                colorScheme="green"
                height="16px"
                width="80%"
                borderRadius="50px"
                value={1}
                isIndeterminate
                mb="40px"
              />
              <Button
                mt="20px"
                mb="20px"
                borderRadius="16px"
                width="50%"
                height="44px"
                background="#03CB88"
                color="white"
                _hover={{
                  boxShadow: "inset 0 0 15px #8235FF",
                }}
                _active={{
                  background: "#8235FF",
                }}
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
        height="966px"
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
        background={bannerColor}
        backdropFilter={bannerBlurColor}
        width="100%"
        height="108px"
        mt="137px"
        gap="20%"
        pt="5px"
        zIndex="1"
      >
        <VisaIcon height="65px" width="65px" zIndex="1" />
        <MastercardIcon height="65px" width="65px" zIndex="1" />
        <PayPalIcon height="65px" width="65px" zIndex="1" />
      </Flex>
      <Flex
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
          fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          px="25%"
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
                  width="262px"
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
                  width="262px"
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
                  width="262px"
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
                  width="262px"
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
                      Insurance
                    </Text>
                    <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                      text a venir
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
          pl={{ sm: "0", md: "7%", lg: "11%", xl: "6%" }}
          pr="50%"
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
                <SimplicityIcon w="64px" h="64px" mb="30px" />
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
                <SupportIcon w="64px" h="64px" mb="26px" />
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
                <LegalIcon w="64px" h="64px" mb="26px" />
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
                <SecurityIcon w="64px" h="64px" mb="30px" />
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
                <EthicsIcon w="64px" h="64px" mb="26px" />
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
                <AccessibilityIcon w="64px" h="64px" mb="26px" />
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
      <Flex flexDirection="column" width="100%" mt="130px" zIndex="1">
        <Flex
          flexDirection="column"
          zIndex="1"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
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
            _active={{
              background: "#8235FF",
            }}
            zIndex="1"
          >
            Purchase tokens
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
        flexDirection="column"
        width="100%"
        mt="230px"
        mb="100px"
        zIndex="1"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        px="15%"
      >
        <Text
          lineHeight="88px"
          fontSize="60px"
          fontWeight="700"
          fontFamily="Montserrat"
          zIndex="1"
        >
          Discover the freedom to choose, invest, manage and use your crypto, in
          your daily life!
        </Text>
      </Flex>
    </>
  );
}

export default Home;

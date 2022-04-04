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
  useColorModeValue,
} from "@chakra-ui/react";

import {
  DividerSVGGrey,
  MonopoleIconWhite,
} from "../../components/Icons/Icons";

import { LandingForm } from "../../components/LandingForm/Form";
import { PartnersBox } from "../../components/Partners/PartnersBox";

import bgPerson from "../../assets/img/bgSmilingPerson.png";
import bgCircleBig from "../../assets/img/bgCircle_big.png";
import ctaBackground1 from "../../assets/img/ctaBackground_1.png";
import ctaBackground2 from "../../assets/img/ctaBackground_2.png";

import financeDIcon from "../../assets/svg/finance.svg";
import investDIcon from "../../assets/svg/invest.svg";
import conciergeDIcon from "../../assets/svg/concierge.svg";
import insuranceDIcon from "../../assets/svg/insurance.svg";
import financeWIcon from "../../assets/svg/financeW.svg";
import investWIcon from "../../assets/svg/investW.svg";
import conciergeWIcon from "../../assets/svg/conciergeW.svg";
import insuranceWIcon from "../../assets/svg/insuranceW.svg";

function Landing() {
  const financeIcon = useColorModeValue(financeWIcon, financeDIcon);
  const investIcon = useColorModeValue(investWIcon, investDIcon);
  const conciergeIcon = useColorModeValue(conciergeWIcon, conciergeDIcon);
  const insuranceIcon = useColorModeValue(insuranceWIcon, insuranceDIcon);

  return (
    <>
      <Box>
        <Image
          display="block"
          src={bgPerson}
          width="100%"
          position="absolute"
          top={{ sm: "600px", md: "700px", lg: "0" }}
          right={{ sm: "10%", md: "10%", lg: "0px" }}
          zIndex="-1"
          pt="100px"
        />
        <Box bg="linear-gradient(180deg, #0C0D31 20.99%, rgba(0, 1, 38, 0) 92.32%);">
          <Grid
            mt="-88px"
            templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
            zIndex="1"
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
                lineHeight="76px"
                fontSize={{ sm: "34px", md: "68px" }}
                fontWeight="700"
                fontFamily="Montserrat"
                mb="20px"
                mt="10px"
              >
                How to use your crypto for daily life?
              </Text>
              <Text
                lineHeight="32px"
                fontSize="24px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                To buy a car, invest in real estate or your next trip ? Discover
                the new solution for investors..
              </Text>
            </Box>
            <Box
              mr={{ sm: "0%", md: "0", lg: "15%" }}
              px={{ sm: "5%", md: "15%", lg: "12%" }}
              mt={{ sm: "40%", md: "25%", lg: "17.5%" }}
              mb={{ sm: "0", md: "0", lg: "-10%" }}
              ml={{ sm: "0", md: "0", lg: "-5%" }}
              zIndex="1"
            >
              <LandingForm
                color="#646587"
                borderColor="#C7CFD6"
                bgColor="#FFFFFF"
                formText="Discover the new solution for investors !"
                textSize="31px"
              />
            </Box>
          </Grid>
          <PartnersBox />
          <Flex flexDirection="column" zIndex="0" w="100%" mt="16px">
            <DividerSVGGrey w="100%" h="100%" zIndex="0" />
          </Flex>
        </Box>
      </Box>
      <Box background="#EEEFF4" pb="140px">
        <Flex
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          width="100%"
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
            Discover the hidden secrets of successful investors
          </Text>
          <Text
            mt="4px"
            mb="60px"
            fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            px={{ sm: "0%", md: "20%", lg: "20%" }}
            zIndex="1"
            lineHeight="50px"
            color="#0C0E47"
          >
            What you will discover in this video
          </Text>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr",
              lg: "1fr 1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
            mb="60px"
            gap="30px"
          >
            <Flex
              background="linear-gradient(103.79deg, rgba(37, 14, 74, 0.4) 19.24%, rgba(33, 12, 66, 0.052) 81.87%, rgba(8, 3, 17, 0) 115.37%)"
              backgroundImage={ctaBackground1}
              borderRadius="16px"
            >
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                  justify="center"
                >
                  <MonopoleIconWhite height="19px" width="43px" color="#FFF" />
                  <Flex direction="column" mt="20px">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="36px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Secret 1
                    </Text>
                    <Text
                      lineHeight="20px"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="32px"
                    >
                      Dynamically leverage other's backend metrics without
                      collaborative.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex backgroundImage={ctaBackground2} borderRadius="16px">
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                  justify="center"
                >
                  <MonopoleIconWhite height="19px" width="43px" color="#FFF" />
                  <Flex direction="column" mt="20px">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="36px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Secret 2
                    </Text>
                    <Text
                      lineHeight="20px"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="32px"
                    >
                      Dynamically leverage other's backend metrics without
                      collaborative.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex backgroundImage={ctaBackground1} borderRadius="16px">
              <Flex direction="column" align="center" w="100%">
                <Flex
                  direction="column"
                  align="center"
                  width="80%"
                  height="350px"
                  justify="center"
                >
                  <MonopoleIconWhite height="19px" width="43px" color="#FFF" />
                  <Flex direction="column" mt="20px">
                    <Text
                      mb="20px"
                      lineHeight="24px"
                      fontSize="36px"
                      fontWeight="700"
                      fontFamily="Montserrat"
                    >
                      Secret 3
                    </Text>
                    <Text
                      lineHeight="20px"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="32px"
                    >
                      Dynamically leverage other's backend metrics without
                      collaborative.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
        <Box px="10%">
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
            zIndex="1"
          >
            User reviews
          </Text>
          <Text
            mt="4px"
            mb="60px"
            fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            zIndex="1"
            lineHeight="50px"
            color="#0C0E47"
            textAlign="left"
          >
            Our users say it best
          </Text>
        </Box>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          mb="60px"
          gap="30px"
          px="10%"
        >
          <Flex background="#FFF" borderRadius="16px" padding="20px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" align="center">
                <Flex direction="column" mt="20px">
                  <Text
                    mb="12px"
                    lineHeight="39px"
                    fontSize="32px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                    color="#0C0E47"
                  >
                    Perfect use !
                  </Text>
                  <Text
                    lineHeight="32px"
                    fontSize="21px"
                    fontWeight="400"
                    color="#0C0E47"
                  >
                    Dynamically leverage other's backend metrics without
                    collaborative...
                  </Text>
                  <Text
                    lineHeight="18px"
                    fontSize="14px"
                    fontWeight="400"
                    color="#646587"
                    mt="22px"
                  >
                    J.Houge - 4 days ago
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex background="#FFF" borderRadius="16px" padding="20px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" align="center">
                <Flex direction="column" mt="20px">
                  <Text
                    mb="12px"
                    lineHeight="39px"
                    fontSize="32px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                    color="#0C0E47"
                  >
                    Having humans by your side changes everything!
                  </Text>
                  <Text
                    lineHeight="32px"
                    fontSize="21px"
                    fontWeight="400"
                    color="#0C0E47"
                  >
                    Dynamically leverage other's backend metrics without
                    collaborative...
                  </Text>
                  <Text
                    lineHeight="18px"
                    fontSize="14px"
                    fontWeight="400"
                    color="#646587"
                    mt="22px"
                  >
                    B.Louis - 1 hour ago
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex background="#FFF" borderRadius="16px" padding="20px">
            <Flex direction="column" align="center" w="100%">
              <Flex direction="column" align="center">
                <Flex direction="column" mt="20px">
                  <Text
                    mb="12px"
                    lineHeight="39px"
                    fontSize="32px"
                    fontWeight="700"
                    fontFamily="Montserrat"
                    color="#0C0E47"
                  >
                    My dreams have come true!
                  </Text>
                  <Text
                    lineHeight="32px"
                    fontSize="21px"
                    fontWeight="400"
                    color="#0C0E47"
                  >
                    Dynamically leverage other's backend metrics without
                    collaborative.
                  </Text>
                  <Text
                    lineHeight="18px"
                    fontSize="14px"
                    fontWeight="400"
                    color="#646587"
                    mt="22px"
                  >
                    L.Dubois - 2 days ago
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Box>

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
          fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
          fontWeight="700"
          fontFamily="Montserrat"
          px={{ sm: "0%", md: "20%", lg: "20%" }}
          zIndex="1"
          lineHeight="50px"
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

      <Flex
        flexDirection="column"
        width="100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={bgCircleBig}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          px="10%"
          pt="100px"
          color="black"
          maxWidth="900px"
          margin="auto"
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            bgGradient="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
            bgClip="text"
          >
            It will be legendary.
          </Text>
          <Text
            mt="8px"
            fontSize={{ sm: "24px", md: "34px", lg: "44px" }}
            fontWeight="700"
            fontFamily="Montserrat"
          >
            So... wanna try?
          </Text>
          <Box>
            <LandingForm
              color="#646587"
              borderColor="#C7CFD6"
              bgColor="transparent"
              formText="Discover the hidden secrets of successful investors"
              textSize="21px"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;

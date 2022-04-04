import React, { useEffect, useState } from "react";
import { Flex, Image, Box, Grid } from "@chakra-ui/react";

import { Partners } from "../../components/Partners/Partners";

function PartnersBox(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = Object.keys(Partners).length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        background="transparent"
        h="108px"
        w="100%"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Grid
          templateColumns="1fr"
          justifyContent="center"
          alignItems="center"
          w="100%"
          px="3%"
        >
          {Object.keys(Partners).map((id, partnersIndex) => {
            let position = "position-9";
            let partnersLength = Object.keys(Partners).length;
            if (partnersIndex === index) {
              position = "position-1";
            }
            if (
              partnersIndex === index + 1 ||
              index - partnersIndex == partnersLength - 1
            ) {
              position = "position-2";
            }

            if (
              partnersIndex === index + 2 ||
              index - partnersIndex == partnersLength - 2
            ) {
              position = "position-3";
            }

            if (
              partnersIndex === index + 3 ||
              index - partnersIndex == partnersLength - 3
            ) {
              position = "position-4";
            }

            if (
              partnersIndex === index + 4 ||
              index - partnersIndex == partnersLength - 4
            ) {
              position = "position-5";
            }

            if (
              partnersIndex === index + 5 ||
              index - partnersIndex == partnersLength - 5
            ) {
              position = "position-6";
            }

            if (
              partnersIndex === index + 6 ||
              index - partnersIndex == partnersLength - 6
            ) {
              position = "position-7";
            }

            if (
              partnersIndex === index + 7 ||
              index - partnersIndex == partnersLength - 7
            ) {
              position = "position-8";
            }

            if (
              partnersIndex === index - 1 ||
              (index === 0 && partnersIndex === partnersLength - 1)
            ) {
              position = "position-0";
            }

            return (
              <Box
                className={`partners_container ${position}`}
                width={{ sm: "100%", md: "25%", lg: "17%" }}
              >
                <Image
                  style={{ margin: "auto" }}
                  src={Partners[id].img}
                  alt={Partners[id].name}
                />
              </Box>
            );
          })}
        </Grid>
      </Flex>
    </>
  );
}

export { PartnersBox };

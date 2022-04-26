import React, { useEffect, useState } from "react";
import { Flex, Image, Box, Grid } from "@chakra-ui/react";

import { Partners } from "../../components/Partners/Partners";

function PartnersBox(props) {
  const { ...rest } = props;
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
        {...rest}
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        h="88px"
        w="100%"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Grid
          templateColumns="1fr"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          w="100%"
          px="3%"
        >
          {Object.keys(Partners).map((id, partnersIndex) => {
            let transform, opacity;
            let partnersLength = Object.keys(Partners).length;

            if (partnersIndex === index) {
              transform = "translateX(0)";
              opacity = 1;
            }
            if (
              partnersIndex === index + 1 ||
              index - partnersIndex === partnersLength - 1
            ) {
              transform = "translateX(100%)";
              opacity = 1;
            }

            if (
              partnersIndex === index + 2 ||
              index - partnersIndex === partnersLength - 2
            ) {
              transform = "translateX(200%)";
              opacity = 1;
            }

            if (
              partnersIndex === index + 3 ||
              index - partnersIndex === partnersLength - 3
            ) {
              transform = "translateX(300%)";
              opacity = 1;
            }

            if (
              partnersIndex === index + 4 ||
              index - partnersIndex === partnersLength - 4
            ) {
              transform = "translateX(400%)";
              opacity = 1;
            }

            if (
              partnersIndex === index + 5 ||
              index - partnersIndex === partnersLength - 5
            ) {
              transform = "translateX(500%)";
              opacity = 1;
            }

            if (
              partnersIndex === index + 6 ||
              index - partnersIndex === partnersLength - 6
            ) {
              transform = "translateX(600%)";
              opacity = 0;
            }

            if (
              partnersIndex === index + 7 ||
              index - partnersIndex === partnersLength - 7
            ) {
              transform = "translateX(700%)";
              opacity = 0;
            }

            if (
              partnersIndex === index + 8 ||
              index - partnersIndex === partnersLength - 8
            ) {
              transform = "translateX(800%)";
              opacity = 0;
            }

            if (
              partnersIndex === index - 1 ||
              (index === 0 && partnersIndex === partnersLength - 1)
            ) {
              transform = "translateX(-100%)";
              opacity = 0;
            }

            return (
              <Box
                transform={transform}
                opacity={opacity}
                position="absolute"
                left="0"
                transition="all 0.3s linear"
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

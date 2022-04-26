import React from "react";
// Chakra imports
import {
  Flex,
  //  CircularProgress,
  //  CircularProgressLabel,
  Button,
  Link,
  //useColorModeValue,
} from "@chakra-ui/react";

//import { Viewer, Worker } from "@react-pdf-viewer/core";

//import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

//import "@react-pdf-viewer/core/lib/styles/index.css";
//import "@react-pdf-viewer/default-layout/lib/styles/index.css";

//import paper from "../../assets/pdf/litepaper.pdf";

function Documents() {
  //  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  //const color = useColorModeValue("white", "dark");

  return (
    <Flex justifyContent="center" w="100%" h="100%" align="center">
      <Link
        href={
          "https://github.com/Monopole-network/monopole-ui/raw/main/src/assets/pdf/litepaper.pdf"
        }
        h="600px"
        w="100%"
        isExternal
        target="_blank"
        _focus={{ boxShadow: "none" }}
      >
        <Flex justifyContent="center" w="100%" h="100%" align="center">
          <Button
            borderRadius="16px"
            width="200px"
            minWidth="160px"
            height="64px"
            background="#8235FF"
            color="white"
            _active={{
              background: "#03CB88",
            }}
          >
            Download our Lite Paper
          </Button>
        </Flex>
      </Link>

      {/*<Worker
        workerUrl={"https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js"}
      >
        <Viewer
          theme={color}
          fileUrl={documents}
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <CircularProgress value={percentages} color="green.400">
              <CircularProgressLabel>{percentages}%</CircularProgressLabel>
            </CircularProgress>
          )}
        />
      </Worker>*/}
    </Flex>
  );
}

export default Documents;

import React from "react";
// Chakra imports
import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
} from "@chakra-ui/react";

import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import paper from "../../assets/pdf/one_pager_en.pdf";

function Paper() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const color = useColorModeValue("white", "dark");

  return (
    <Flex px="8%">
      <Worker
        workerUrl={"https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js"}
      >
        <Viewer
          theme={color}
          fileUrl={paper}
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <CircularProgress value={percentages} color="green.400">
              <CircularProgressLabel>{percentages}%</CircularProgressLabel>
            </CircularProgress>
          )}
        />
      </Worker>
    </Flex>
  );
}

export default Paper;

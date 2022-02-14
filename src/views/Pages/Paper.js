import React, { useState } from "react";
// Chakra imports
import { Text, Flex, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import paper from "../../assets/pdf/one_pager_en.pdf";

function Paper() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Flex px="5%">
    <Worker workerUrl={"https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js"}>
    <div
        style={{
            position: 'relative',
        }}
    >
        <div
            style={{
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, 0)',
                zIndex: 1,
            }}
        >
            {(props: ToolbarSlot) => {
                const {
                    CurrentPageInput,
                    Download,
                    EnterFullScreen,
                    GoToNextPage,
                    GoToPreviousPage,
                    NumberOfPages,
                    Print,
                    ZoomIn,
                    ZoomOut,
                } = props;
                return (
                    <>
                        <div style={{ padding: '0px 2px' }}>
                            <ZoomOut />
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <ZoomIn />
                        </div>
                        <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                            <GoToPreviousPage />
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <CurrentPageInput /> / <NumberOfPages />
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <GoToNextPage />
                        </div>
                        <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                            <EnterFullScreen />
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <Download />
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <Print />
                        </div>
                    </>
                );
            }}
        </div>
        <Viewer
          fileUrl={paper}
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <CircularProgress value={percentages} color='green.400'>
              <CircularProgressLabel>{percentages}%</CircularProgressLabel>
            </CircularProgress>
          )}
        />
    </div>
    </Worker>
    </Flex>
  );
};

export default Paper;

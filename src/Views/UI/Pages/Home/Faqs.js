import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Slide from "react-reveal/Slide";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const data = [
  {
    question: "What is Vishna Lab ?",
    answer: (
      <>
        This is Vision and Network analysis lab.Vision Network Analysis is a
        program for planning, design and evaluation of power systems. The
        package makes it easy to perform load flow, short-circuit and dynamic
        calculations, also fault and reliability analyses. Additionally, Vision
        Network Analysis allows the user to simulate the operation of protection
        features.
      </>
    ),
  },
  {
    question: "Why is core strength of Vishna Lab ?",
    answer: (
      <>
        Computer Vision Algorithms for real time application​ Medical Image
        processing and Health care analytics​ Developing algorithms for
        detection and Tracking for Asset Analysis​ Thermal Image Camera Analysis
        ​ Hyperspectral Image analysis​ and many more..​
      </>
    ),
  },
  {
    question: "Who are Incharges of Vishna Lab?",
    answer: (
      <>
        <ol>
          <li>Dr.T.Senthil Kumar</li>
          <li> Dr.Sikha O K</li>
        </ol>
      </>
    ),
  },
  {
    question: "What are completed Projects in lab ?",
    answer: (
      <>
        A framework for event modeling and detection for Smart Buildings using
        Vision Systems​ DST(NRDMS)
        <br />
        Fund Value: 43.86 lakhs
      </>
    ),
  },
  {
    question: "What are submitted Projects in lab ?",
    answer: (
      <>
        <ol>
          <li>
            Multi-Pose Disguised Face Recognition.​ Datafoundary –​ Fund Value :
            15 lakhs ​
          </li>
          <li>
            Query Based Extractive Text Summarization Over Legal Documents Using
            Deep Learning​ Datafoundary –​ Fund Value : 15 lakhs ​ ​
          </li>
          <li>
            Artificial Intelligence (AI) for Education and Sustainable
            Development.​ SONY –​ Fund Value : 18 lakhs ​ ​
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "WHat are research areas in Vishna Lab",
    answer: (
      <>
        These are the research areas in Vishna Lab
        <ol>
          <li>Computer Vision</li>
          <li>Satillite Imaging</li>
          <li>Medical Imaging</li>
          <li>Precision Agriculture</li>
          <li>Video Analytics</li>
          <li>Network Data Analytics and Visualization ​</li>
        </ol>
      </>
    ),
  },
];
const Faqs = () => {
  return (
    <div>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Slide bottom>
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
              fontSize: { md: "48px", xs: "31px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "#1b1b1b",
            }}
          >
            Frequently Asked Questions (FAQs)
          </Typography>
        </Slide>
        <Box sx={{ marginTop: { md: "50px", xs: "10px" } }} />
        <Slide bottom>
          {data.map((item, i) => (
            <Accordion
              sx={{
                background: "transparent",
                boxShadow: "none",
                border: "2px solid #66D3D5",
                mt: 3,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#37B57E" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  display="flex"
                  sx={{ alignItems: { md: "center", xs: "flex-start" } }}
                  gap="10px"
                >
                  <Typography
                    sx={{
                      fontSize: { md: "31px", xs: "22px" },
                      fontWeight: "500",
                      lineHeight: "46px",
                      color: "#68D3D4",
                    }}
                  >
                    Q.{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "30px",
                    }}
                  >
                    {item.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" alignItems="flex-start" gap="10px">
                  <Typography
                    sx={{
                      fontSize: "31px",
                      fontWeight: "500",
                      lineHeight: "46px",
                      color: "#68D3D4",
                    }}
                  >
                    A.{" "}
                  </Typography>
                  <Typography color="#565656">{item.answer}</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Slide>
      </Box>
    </div>
  );
};

export default Faqs;

import React from "react";
import { Box, Grid } from "@mui/material";
import { Fade } from "react-reveal";
import { Typography } from "@mui/material";
import { GreyDotsRight, GreyDotsLeft } from "../../Commons/GreyDots";
import PublicationCard from "../../Commons/PublicationCard";
import PublicationDesc from "../../Commons/PublicationDesc";
import Resources from "./Resources";
const details = [
  {
    id: "1",
    title: "Computer Vision based Asset Surveillance for Smart Buildings",
    description:
      "The motivation of the work is to leverage the smart nature of building, in such a way that when an asset inside the building is captured and given as query image, the user of the building should be provided with all the relevant assets inside the building.",
    image: "linearregression.png",
    category: "A",
  },
  {
    id: "2",

    title:
      "An Efficient Rule Based Algorithm for Fire Detection on Real Time Videos",
    description:
      "The projected work shows generic rule in YCbCr color space based fire pixel detection is proposed for smart building which will complement the conventional electronic sensor based fire detection system.",
    image: "4.JPG",
    category: "B",
  },
  {
    id: "3",

    title:
      "Crowded Area Detection With the government of India’s focus on “Digital India”, building Smart Cities is one of its major initiative. For smart cities to be built or renovated, it is essential that the existing buildings and infrastructure become smarter. In this project we aim to develop a software framework on which applications can be developed for buildings, to respond to emergencies and disaster management. In this context we refer building to include indoor spaces (rooms/halls/closed areas) and outdoor spaces (floors, stair cases, corridors, open spaces). Pervasive systems are necessary to make existing buildings smarter and to respond to emergencies. Ability to identify Overcrowded area and answer to queries about their location in a building helps authorities to control Crowd in case of emergencies like Stampede, Natural Calamities, Terrorist Attacks and other Man-Made Disasters.",
    description:
      "Gautam, K. S., Parameswaran, L., & Thangavel, S. K. Computer Vision Based Asset Surveillance for Smart Buildings. Journal of Computational and Theoretical Nanoscience, Volume 17, Number 1,pp 456-463, 2020 .K. S. Gautam, Parameswaran, L., and Thangavel, S. Kumar, “A Cascade Color Image Retrieval Framework for Image Retrieval”, in Proceedings of 2nd International Conference On Computational Vision and Bio Inspired Computing, 2018",
    image: "objecttracking.JPG",
    category: "A",
  },
  {
    id: "4",

    title: "Object Detection and Tracking",
    description:
      "Object Detection and tracking is one of the major fundamental challenging problems in computer vision applications due to difficulties in tracking of objects can arises due to intrinsic and extrinsic factors like deformation, camera motion, motion blur and occlusion. This paper presents a helpful application with a real-time detection system that can automatically capture the real time scene where the user-defined important objects appear and detect it ",
    image: "objectdetection.png",
    category: "C",
  },
  {
    id: "5",

    title: "Asset tracking",
    description:
      "We aim to design and provide a compact security system for keeping track of personal belongings or assets. If a registered asset is out of specific premises, the monitoring system will alert the user. The tracking system is mainly composed of an aruco marker which is placed on the assets. Objects (such as chairs, mobile phones, laptops and portable devices) are tagged with the markers and a vision system is used to track and secure different objects.",
    image: "assettracking.png",
    category: "D",
  },
];

const resources = [
  {
    title: "CP PLUS SPEED DOME 1080P",
    image: "res1.JPG",
    description: (
      <>
        <ul>
          <li>CP PLUS SPEED DOME 1080P</li>
          <li>Max. 50/60fps@1080P</li>
          <li>Powerful 30x Optical and 16x Digital zoom </li>
          <li>
            WDR(120dB), 3D DNR, Day/Night(ICR), Auto Iris, Auto focus, BLC, HLC{" "}
          </li>
          <li>
            Up to 300 presets, 8 auto scan, 8 tour, 5 pattern, auto pan, auto
            scan{" "}
          </li>
          <li>IR Range of 150 Mtr. </li>
          <li>Max 300 preset speed, 360° endless pan rotation </li>
        </ul>
      </>
    ),
  },
  {
    title: "Fluke TiS40 Infrared Camera",
    image: "res3.JPG",
    description: (
      <>
        <ul>
          <li>
            Fixed focus infrared camera with 160x120 resolution (19,200 pixels)
          </li>
          <li>
            Helps you find problems fast with exclusive IR-Fusion® AutoBlend and
            PIP mode
          </li>
          <li>
            Quickly captures an in-focus image with point and shoot technology
          </li>
          <li>Provides a D:S of 257:1</li>
          <li>
            Offers temperature measurement range from -20 °C to 350 °C (-4 °F to
            662 °F)
          </li>
          <li>Displays images on a 3.5 inch, 320x240 LCD</li>
          <li>
            Captures visible light images with built-in 5 megapixel industrial
            performance digital camera
          </li>
          <li>
            Includes a smart battery system that allows you to easily monitor
            your battery charge level with five-segment LED display
          </li>
          <li>
            Allows real-time communication by email from your smart phone with
            Fluke Connect®*
          </li>
          <li>
            Stores thousands of images—4 GB internal memory and optional 4 GB
            micro SD card
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "CP PLUS Camera",
    image: "res4.JPG",
    description: (
      <>
        <ul>
          <li> Max 25fps@4MP</li>
          <li>H.265/H.264 Video Compression</li>
          <li>WDR(100dB), Day/Night(ICR), AWB, AGC, BLC</li>
          <li>3.6mm fixed lens (6mm optional)</li>
          <li>IR Range of 30 Mtrs, IP66</li>
          <li>Mobile Software: cMOB-20</li>
          <li>CMS Software: RVMS Pro</li>
        </ul>
      </>
    ),
  },
  {
    title: "Lenovo Think Station",
    image: "res6.JPG",
    description: (
      <>
        <ul>
          <li> INTEL CORE I7 -7700(7 th GEN)</li>
          <li>2*16 GB RAM</li>
          <li>1TB HDD</li>
          <li>4GB NVIDIA P 1000 GRAPHICS CARD</li>
        </ul>
      </>
    ),
  },
  {
    title: "Raspberry Pi Camera",
    image: "res7.JPG",
    description: (
      <>
        <ul>
          <li>
            Second Generation Raspberry Pi Camera Module with Fixed Focus Lens
          </li>
          <li>
            Sony Exmor IMX219 Sensor Capable of 4K30, 1080P60, 720P180, 8MP
            Still
          </li>
          <li>3280 (H) x 2464 (V) Active Pixel Count</li>
          <li>Maximum of 1080P30 and 8MP Stills in Raspberry Pi Board</li>
          <li>2A Power Supply Highly Recommended</li>
        </ul>
      </>
    ),
  },
  {
    title: "Arduino UNO R3",
    image: "res8.JPG",
    description: (
      <>
        <ul>
          <li>Operating Voltage: 5V</li>
          <li>Input Voltage (recommended): 7-12V</li>
          <li>Input Voltage (limits): 6-20V</li>
          <li>Digital I/O Pins: 14 (of which 6 provide PWM output)</li>
          <li>Analog Input Pins: 6</li>
          <li>DC Current per I/O Pin: 40 mA</li>
          <li>DC Current for 3.3V Pin: 50 mA</li>
          <li>Flash Memory: 32 KB of which 0.5 KB used by bootloader</li>
          <li>SRAM: 2 KB (ATmega328)</li>
          <li>EEPROM: 1 KB (ATmega328)</li>
          <li>Clock Speed: 16 MHz</li>
        </ul>
      </>
    ),
  },
  {
    title: "Smoke Temperature gas flame sensor",
    image: "res9.JPG",
    description: (
      <>
        <ul>
          <li>MQ2 Smoke Sensor, Gas Sensor</li>
          <li>
            Detecting LPG, i-butane, propane, methane, alcohol, hydrogen and
            smoke
          </li>
          <li>Simple drive circuit, stable and long life</li>
          <li>Wide detecting scope, fast response and high sensitivity</li>
          <li>
            Used in gas leakage like smoke methane and liquefied flammable gas
          </li>
          <li>Analog gas sensor MQ2</li>
          <li>DHT11 - Temperature and Humidity Sensor</li>
          <li>Type: Temperature Sensor and Controller</li>
          <li>Power Source: DC</li>
          <li>Material: Plastic</li>
        </ul>
      </>
    ),
  },
];
const Research = () => {
  return (
    <div>
      <Box>
        <Box>
          <img
            src={require("../../../Assets/Research/comp2.jpg")}
            alt="rocektsbg"
            style={{ width: "100%", height: "25rem" }}
          />
        </Box>
      </Box>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignContent="flex-start"
        wrap="wrap"
      >
        <Grid item xl="9" md="9" xs="12" position="relative">
          <Box className="container" sx={{ marginTop: { md: "50px" } }}>
            <Typography
              sx={{
                fontSize: { md: "58px", xs: "31px" },
                lineHeight: { md: "70px", xs: "48px" },
                color: "#1B1B1B",
              }}
            >
              Computer Vision and Network Analysis
            </Typography>
            <Typography
              sx={{
                fontWeight: "light",
                mt: "10px",
                ml: "5px",

                //fontSize: { md: "48px", xs: "31px" },
              }}
            >
              Amrita Center for Computational Neuroscience has been instituted
              to comprehend the brain and its neural circuits by devising
              mathematical models. In contrast to other fields in biology,
              mathematical thinking and methodology have become entrenched in
              neuroscience since its very beginning, as witnessed by the
              classical work of Hodgkin and Huxley.
            </Typography>
          </Box>
        </Grid>
        <Grid item xl="3" md="3" xs="12" position="relative">
          <Box
            className="container"
            sx={{
              marginTop: { md: "50px", xs: "100px" },
              display: { lg: "block", md: "none", xs: "none" },
            }}
          >
            <img
              src={require("../../../Assets/Research/comp.jpg")}
              alt="comp img"
              style={{ width: "70%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box className="container" sx={{ marginTop: { md: "50px", xs: "50px" } }}>
        <Typography
          sx={{
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1B1B1B",
          }}
        >
          Publications
        </Typography>

        <Box sx={{ marginTop: { md: "50px" } }}>
          <Box
            className="container"
            sx={{
              marginTop: { md: "30px", xs: "50px" },
              marginBottom: { md: "100px", xs: "100px" },
            }}
          >
            <GreyDotsRight />
            <Box
              display="flex"
              justifyContent="center"
              gap="20px"
              flexWrap="wrap"
            >
              {details &&
                details.map((item, i) => (
                  <Fade bottom>
                    <PublicationCard details={item} />
                  </Fade>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container" sx={{ marginTop: { md: "50px", xs: "50px" } }}>
        <Typography
          sx={{
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1B1B1B",
          }}
        >
          Resources
        </Typography>

        <Box sx={{ marginTop: { md: "50px" } }}>
          <Box
            className="container"
            sx={{
              marginTop: { md: "30px", xs: "50px" },
              marginBottom: { md: "100px", xs: "100px" },
            }}
          >
            <GreyDotsLeft />
            <Box
              display="flex"
              justifyContent="center"
              gap="20px"
              flexWrap="wrap"
            >
              {resources &&
                resources.map((item, i) => (
                  <Fade bottom>
                    <Resources resources={item} />
                  </Fade>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Research;

import React from "react";
import { Typography, Box } from "@mui/material";
const Aboutus = () => {
  return (
    <div>
      <Box
        className="container"
        sx={{
          margin: { md: "100px 0", xs: "50px 0" },
          backgroundColor: "gray",
          width: "100%",
          display: "flex",
          py: "4rem",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box className="container">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              lineHeight: "70px",
              color: "white",
              textAlign: "center",
              mb: "20px",
            }}
          >
            About Us{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "18px", xs: "16px" },
              lineHeight: "28px",
              color: "white",
            }}
          >
            The VIShNA lab is equipped with specialised high-end computing
            servers, GPU workstations, and computing devices suitable for
            running image and video applications. With cameras fitted in various
            building locations, real-time data in the form of video and images
            is acquired and stored on a server for further analysis. Thermal
            image acquisition systems are available to develop a variety of
            applications. The VIShNA lab has plenty of streams, including
            Computer Vision Algorithms for real-time applications, Medical Image
            processing, and Health Care analytics, Developing detection and
            tracking algorithms for asset analysis, thermal image camera
            analysis, hyperspectral image analysis, deep learning architectures,
            transfer learning models, video analytics approach for real-time
            problems, biometric algorithms, satellite image analysis – change
            detection, object detection and tracking, developing algorithms to
            increase user and node security and trust. VIShNA Collaborations
            With Organizations/Industries like UPC, Aravind Eye Care System,
            IBM, Multicoreware, Kerala Agricultural University, Datafoundry, and
            the Indian Department of Science and Technology.
            <ul>
              <li>
                Algorithms for identifying unexpected events like locating
                crowded areas, fire detection, rain detection, smoke detection,
                electrical burst, and water burst in a given building.
              </li>
              <li>
                Algorithms for identifying major assets and tracking their
                movement from one place to another from time to time
                (spatiotemporal) in this environment.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Aboutus;

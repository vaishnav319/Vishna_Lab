import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import CircularLoader from "./CircularLoader";
const PublicationDesc = () => {
  const { id } = useParams();
  const [pub, setPub] = useState();
  useEffect(() => {
    const det = details.filter((item) => item.id == id);
    console.log(det[0]);
    setPub(det[0]);
  }, [id]);
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
  const img = details.image;
  return (
    <div>
      {pub ? (
        <Box
          className="container"
          sx={{
            marginTop: { md: "100px", xs: "100px" },
            marginBottom: { md: "100px", xs: "100px" },
          }}
        >
          <Link to="/research">
            <Button
              sx={{
                bgcolor: "black",

                "&:hover": { backgroundColor: "gray" },
              }}
            >
              Back to Research Page
            </Button>
          </Link>

          <Grid>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              alignContent="flex-start"
              wrap="wrap"
            >
              <Grid item xl="7" md="7" xs="12" position="relative">
                <Fade left>
                  <Box className="container" sx={{ marginTop: { md: "50px" } }}>
                    <Typography
                      sx={{
                        fontSize: { md: "28px", xs: "30px" },
                        lineHeight: { md: "50px", xs: "48px" },
                        color: "#68D3D4",
                      }}
                    >
                      Publication Title:
                      <br />
                      {pub.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "25px", xs: "31px" },
                        lineHeight: { md: "40px", xs: "48px" },
                        // color: "	#A9A9A9",
                        color: "#1B1B1B",
                        ml: "5px",
                      }}
                    >
                      Publication Description:
                      <br />
                      {pub.description}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
              <Grid item xl="5" md="5" xs="12" position="relative">
                <Fade right>
                  <Box>
                    <img
                      src={require(`../../Assets/Research/${pub.image}`)}
                      alt="rocektsbg"
                      style={{ width: "100%", height: "25rem" }}
                    />
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <CircularLoader />
      )}
    </div>
  );
};

export default PublicationDesc;

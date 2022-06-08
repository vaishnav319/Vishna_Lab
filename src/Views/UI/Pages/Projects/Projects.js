import React from "react";
import ProjectCard from "./ProjectCard";
import { Typography, Box } from "@mui/material";
const projects = [
  {
    title: "Computer Vision based Asset Surveillance for Smart Buildings",
    description:
      "Unraveling meaningful pattern form the video offers a solution to many real-world problems, especially surveillance and security. Detecting and tracking an object under the area of video surveillance, not only automates the security but also leverages smart nature of the buildings.",
  },
  {
    title: "A Cascade Color Image Retrieval Framework for Image Retrieval",
    description:
      "The search for the digital image from the repository is challenging since the volume of the image created and consumed is growing exponentially with respect to time. This makes the image retrieval an ongoing research problem. Rather than relying on metadata, analyzing the content of the image is proven to be a successful solution for retrieval. ",
  },
  {
    title:
      "A Computer Vision Based Approach for Object Recognition in Smart Buildings",
    description:
      "Object recognition is one of the essential Computer Vision techniques. The success of object recognition lies in identifying features that strongly represent the object of interest. ",
  },
  {
    title:
      "An Efficient Rule Based Algorithm for Fire Detection on Real Time Videos.",
    description:
      "The projected work shows generic rule in YCbCr color space based fire pixel detection is proposed for smart building which will complement the conventional electronic sensor based fire detection system. ",
  },
  {
    title:
      "An Efficient Rule Based Algorithm for Fire Detection on Real Time Videos.",
    description:
      "The projected work shows generic rule in YCbCr color space based fire pixel detection is proposed for smart building which will complement the conventional electronic sensor based fire detection system. ",
  },
];
const Projects = () => {
  return (
    <Box sx={{ marginTop: { md: "100px", xs: "100px" } }} className="container">
      <Typography
        sx={{
          margin: "40px",
          fontSize: { md: "48px", xs: "30px" },
          lineHeight: { md: "50px", xs: "48px" },
          color: "#68D3D4",
        }}
      >
        Projects
      </Typography>

      <Box
        sx={{ marginTop: "20px", marginBottom: "20px" }}
        display="flex"
        justifyContent="center"
        gap="20px"
        flexWrap="wrap"
      >
        {projects.map((item, i) => {
          <ProjectCard details={item} />;
        })}
        {projects && projects.map((item, i) => <ProjectCard details={item} />)}
      </Box>
    </Box>
  );
};

export default Projects;

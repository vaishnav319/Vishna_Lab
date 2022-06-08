import React from "react";
import FacultyCard from "../../Commons/FacultyCard";
import { Box } from "@mui/material";
import { Fade } from "react-reveal";
import { Typography } from "@mui/material";
import { GreyDotsRight, GreyDotsLeft } from "../../Commons/GreyDots";
import teacherData from "../data/FacultyData";
import PhdData from "../data/PhdScholarsData";
import PhdCard from "../../Commons/PhdCard";
import DeveloperCard from "../../Commons/DeveloperCard";
import DeveloperData from "../data/DeveloperData";
const People = () => {
  return (
    <div>
      <Box
        className="container"
        sx={{ marginTop: { md: "100px", xs: "100px" } }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "58px", xs: "31px" },
            textShadow: "2px 2px 0 black, 4px 4px 0 black",
            lineHeight: { md: "70px", xs: "48px" },
            color: "#68D3D4",
            ml: "30px",
            mt: "30px",
          }}
        >
          Faculty
        </Typography>
        <GreyDotsRight />
        <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
          {teacherData &&
            teacherData.map((item, i) => (
              <Fade bottom>
                <FacultyCard details={item} />
              </Fade>
            ))}
        </Box>
      </Box>
      <Box
        className="container"
        sx={{ marginTop: { md: "100px", xs: "100px" } }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "48px", xs: "31px" },
            textShadow: "2px 2px 0 black, 4px 4px 0 black",
            lineHeight: { md: "70px", xs: "48px" },
            color: "#68D3D4",
            ml: "30px",
            mt: "30px",
          }}
        >
          Aluminis
        </Typography>
        <GreyDotsLeft />
        <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
          {PhdData &&
            PhdData.map((item, i) => (
              <Fade bottom>
                <PhdCard details={item} />
              </Fade>
            ))}
        </Box>
      </Box>
      <Box
        className="container"
        sx={{ marginTop: { md: "100px", xs: "100px" } }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "48px", xs: "31px" },
            textShadow: "2px 2px 0 black, 4px 4px 0 black",
            lineHeight: { md: "70px", xs: "48px" },
            color: "#68D3D4",
            ml: "30px",
            mt: "30px",
          }}
        >
          Developers
        </Typography>
        <GreyDotsLeft />
        <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
          {DeveloperData &&
            DeveloperData.map((item, i) => (
              <Fade bottom>
                <DeveloperCard details={item} />
              </Fade>
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default People;

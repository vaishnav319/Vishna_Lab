import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PhdData from "../data/PhdScholarsData";
import { Image } from "@mui/icons-material";

const FacultyDesc = () => {
  const { id } = useParams();
  const [pub, setPub] = useState();
  useEffect(() => {
    const det = PhdData.filter((item) => item.id == id);
    console.log(det[0]);
    setPub(det[0]);
  }, [id]);
  return (
    <div>
      {pub && (
        <div>
          <Box
            sx={{
              margin: "50px 0",
              background: "#68D3D4",
              height: "auto",
              padding: "120px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              className="container"
              sx={{
                display: "flex",
                position: "absolute",
                marginTop: "12rem",
                marginLeft: "6rem",
                flexWrap: "wrap",
                flexDirection: "row",
                gap: "30px",
                justifyContent: "flexStart",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ marginTop: { xs: "50px" } }}>
                <img
                  src={require(`../../../Assets/People/${pub.image}`)}
                  alt="rocektsbg"
                  style={{ borderRadius: "15px" }}
                />
              </Box>

              <div>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "48px",
                    lineHeight: "75px",
                    color: { lg: "#FFFFFF", md: "#1b1b1b" },
                  }}
                >
                  {pub.name}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: " #1B1B1B",
                  }}
                >
                  {pub.email}
                </Typography>
              </div>

              <br />
            </Box>
          </Box>
          <Box
            maxWidth="lg"
            sx={{
              margin: { md: "100px auto", xs: "150px auto" },
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "28px",
                color: " #1B1B1B",
              }}
            >
              Area of Research: {pub && pub?.Area_of_Research}
            </Typography>

            <Box sx={{ fontSize: "20px", mt: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "3rem",
                  color: " #68D3D4",
                }}
              >
                Publications:
              </Typography>
              {pub.publications}
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
};

export default FacultyDesc;

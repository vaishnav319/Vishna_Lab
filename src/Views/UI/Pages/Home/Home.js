import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { GreyDotsRight } from "../../Commons/GreyDots";
import Faqs from "./Faqs";
import DemoForm from "./DemoForm";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import TextTicker from "./TextTicker";
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import CardSlick from "./CardSlick";
import AchievemetCard from "../../Commons/AchievementCard";

const Home = () => {
  return (
    <>
      <Box
        className="container"
        sx={{ marginTop: { md: "100px", xs: "100px" } }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="flex-start"
          wrap="wrap"
        >
          <Grid position="relative">
            <Fade left>
              <Box
                sx={{
                  textAlign: "center",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "48px", xs: "31px" },
                  lineHeight: { md: "70px", xs: "48px" },
                  color: "#000",
                }}
              >
                Welcome to
                <span style={{ color: "#68D3D4" }}>
                  {" "}
                  Vision and Network Analytics
                </span>{" "}
                Laboratory
              </Typography>
              <br />
              <br /> <br />
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          flexWrap="wrap"
        >
          <Grid
            item
            xl="5"
            md="5"
            xs="12"
            sx={{ py: "50px", mr: "5px" }}
            position="relative"
            style={{
              backgroundColor: "black",
              borderRadius: "40px",
            }}
          >
            <Fade top>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "48px", xs: "31px" },
                  textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
                  lineHeight: { md: "70px", xs: "48px" },
                  color: "#68D3D4",
                  ml: "30px",
                  mt: "30px",
                }}
              >
                VISHNA LAB
              </Typography>
            </Fade>
            <br />
            <Fade left>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { md: "20px", xs: "16px" },
                  lineHeight: "28px",
                  color: "white",
                  p: { md: "24px", xs: "10px" },
                }}
              >
                With focus on digital buildings, digital campus and digital
                city, this lab has been setup in 2017 by the Department of
                Computer Science and Engineering with funding from Department of
                Science and Technology, Government of India under project id:
                F.NO NRDMS/01/175/016 G & C.
              </Typography>
              <br /> <br />
              <Link to="/book-a-demo" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    ml: 5,
                    borderRadius: "26px",
                    background: "#68D3D4",
                    color: "#001531",
                    "&:hover": { background: "#68D3D4", color: "" },
                    opacity: 75,
                  }}
                >
                  Explore more!
                </Button>
              </Link>
            </Fade>
          </Grid>
          <GreyDotsRight />
          <Grid item xl="6" md="6" xs="12">
            <ImageList>
              <ImageListItem>
                <ImageList
                  sx={{ width: 650, height: 550 }}
                  cols={2}
                  rowHeight={264}
                >
                  <ImageListItem>
                    <img
                      alt="col1"
                      src={require("../../../Assets/home/col1.JPG")}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      alt="col2"
                      src={require("../../../Assets/home/4.JPG")}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      alt="col3"
                      src={require("../../../Assets/home/5.JPG")}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      alt="col4"
                      src={require("../../../Assets/home/6.JPG")}
                      loading="lazy"
                    />
                  </ImageListItem>
                </ImageList>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Box>

      <Aboutus />

      {/* second section */}
      <Box>
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1B1B1B",
          }}
        >
          Current/Future Events
        </Typography>
        <CardSlick />
      </Box>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Slide bottom>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "48px", xs: "31px" },
                lineHeight: { md: "70px", xs: "48px" },
                color: "#1B1B1B",
              }}
            >
              Experience learning that is
            </Typography>
            <Box sx={{ width: "300px" }}>
              {" "}
              <TextTicker />
            </Box>
          </Box>
        </Slide>
        <br />
        <br />
        <AchievemetCard />

        {/*  */}

        {/*  */}
      </Box>
      <Box className="container">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "40px",
            lineHeight: "70px",
            color: "black",
            textAlign: "center",
          }}
        >
          Our Collaborators
        </Typography>
      </Box>
      <Box
        className="container"
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          py: "3rem",
          mx: "1rem",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll1.jpg")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll2.jpg")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll3.jpg")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll4.jpg")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll5.jpg")}
            alt="image_"
          />
        </div>
      </Box>
      <Box
        className="container"
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          py: "3rem",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/coll6.jpg")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/com1.png")}
            alt="image_"
          />
          <img
            style={{ padding: "1rem" }}
            src={require("../../../Assets/home/com2.jpg")}
            alt="image_"
          />
        </div>
      </Box>

      <Faqs />
      {/*  */}
      <DemoForm />
    </>
  );
};

export default Home;

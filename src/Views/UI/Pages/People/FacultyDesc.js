import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import teacherData from "../data/FacultyData";
import { Image } from "@mui/icons-material";

const FacultyDesc = () => {
  const { id } = useParams();
  const [pub, setPub] = useState();
  useEffect(() => {
    const det = teacherData.filter((item) => item.id == id);
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
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "3rem",
                    color: " #1B1B1B",
                  }}
                >
                  office: {pub.office}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "3rem",
                    color: " #1B1B1B",
                  }}
                >
                  Designation: {pub.designation}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "3rem",
                    color: " #1B1B1B",
                  }}
                >
                  {/* Gender: {profile && profile?.gender} */}
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: " #1B1B1B",
                  }}
                >
                  {/* Phone Number: {userInfo & userInfo?.phoneNumber} */}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "3rem",
                    color: " #1B1B1B",
                  }}
                >
                  Home Page:{" "}
                  <a href={pub.homepage}>
                    Click here to visit Amrita Profile Page
                  </a>
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "3rem",
                    color: " #68D3D4",
                  }}
                >
                  {/* Max Qualification: {profile && profile?.maxQualification} */}
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ fontSize: "20px", mt: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "3rem",
                  color: " #68D3D4",
                }}
              >
                Education:
              </Typography>
              {pub.education}
            </Box>
            <Box sx={{ fontSize: "20px", mt: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "3rem",
                  color: " #68D3D4",
                }}
              >
                Courses Offered:
              </Typography>
              {pub.coursesOffered}
            </Box>
            {pub.invitedTalks && (
              <Box sx={{ fontSize: "20px", mt: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "40px",
                    lineHeight: "3rem",
                    color: " #68D3D4",
                  }}
                >
                  Invited Talks:
                </Typography>
                {pub.invitedTalks}
              </Box>
            )}
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
      {/* <Box>
        <Box
          maxWidth="lg"
          sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Your Personal ID: {profile && profile?.user}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Location: {profile && profile?.location}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Gender: {profile && profile?.gender}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: " #1B1B1B",
                }}
              >
                Phone Number: {userInfo & userInfo?.phoneNumber}
                {userInfo && userInfo?.isVerified ? (
                  <span style={{ color: "green" }}>
                    verified <VerifiedIcon />
                  </span>
                ) : (
                  <div>
                    <span style={{ color: "red" }}>
                      Not verified <GppMaybeIcon />
                    </span>
                    <Typography>
                      <Link to="/" style={{ color: "#FFD223" }}>
                        Click here to verify you Number
                      </Link>
                    </Typography>
                  </div>
                )}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Portfolio Link: {profile && profile?.websiteLink}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Max Qualification: {profile && profile?.maxQualification}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "28px",
              lineHeight: "75px",
              color: "#1B1B1B",
            }}
          >
            Experience Credentials :{" "}
            <Link to="/add/experience">
              <Button
                size="large"
                variant="contained"
                sx={{
                  borderRadius: "94px",
                  background: "#fff",
                  color: "#FFD223",
                  "&:hover": { background: "#fff", color: "#001537" },
                }}
              >
                Add Experience
              </Button>
            </Link>
          </Typography>
          {experience && <ExperienceCredentials experience={experience} />}
        </Box>
        <Button sx={{ ml: 15, mb: 5 }} variant="contained" color="error">
          Delete your Account
        </Button>
      </Box> */}
    </div>
  );
};

export default FacultyDesc;

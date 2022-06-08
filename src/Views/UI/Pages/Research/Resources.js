import React from "react";
import { Box } from "@mui/material";
import { Fade } from "react-reveal";
import { Button, Grid, Typography } from "@mui/material";

const Resources = ({ resources }) => {
  return (
    <div>
      <Fade Bottom>
        <Box
          sx={{
            width: { lg: 1075 },
            marginBottom: "25px",
            boxShadow: 3,
            borderRadius: "30px",
          }}
        >
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
                <Box className="container">
                  <Typography
                    sx={{
                      fontSize: { md: "28px", xs: "30px" },
                      color: "#68D3D4",
                    }}
                  >
                    <br />
                    {resources.title}
                  </Typography>
                  <Typography sx={{}}>
                    <br />
                    {resources.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl="5" md="5" xs="12" position="relative">
                <Box>
                  <img
                    src={require(`../../../Assets/Research/${resources.image}`)}
                    alt="rocektsbg"
                    style={{ width: "90%", height: "20rem" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </div>
  );
};

export default Resources;

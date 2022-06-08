import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function AchievemetCard() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#68D3D4",
        borderRadius: "20px",
        boxShadow: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "col" }}>
        <CardContent sx={{ flex: { lg: "2 0 auto" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "48px", xs: "31px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "White",
              ml: "20px",
            }}
          >
            Core Strength of our lab
          </Typography>
          <Typography component="div" variant="h5">
            <ul>
              <li>Computer Vision Algorithms for real time application​</li>
              <li> Medical Image processing and Health care analytics</li>
              <li>
                Developing algorithms for detection and Tracking for Asset
                Analysis
              </li>
              <li>Thermal Image Camera Analysis</li>
              <li>Hyperspectral Image analysis</li>
              <li>Deep learning Architectures </li>
              <li>
                Transfer learning Models Video Analytics approach for real time
                problems
              </li>
              <li>
                BioMetric Algorithms Satellite Image Analysis- change detection
              </li>
              <li>
                Object detection and tracking​ Developing Algorithms for
                increasing the security and trust among users and nodes
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 251, display: { md: "block", xs: "none" } }}
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Live from space album cover"
      />
    </Card>
  );
}

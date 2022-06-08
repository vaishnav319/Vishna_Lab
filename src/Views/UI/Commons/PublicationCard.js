import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Trim from "../../../Application/utils/Trim";
import { Link } from "react-router-dom";
export default function PublicationCard({ details }) {
  return (
    <Box
      sx={{
        width: 375,

        background: "#68D3D4",
        cursor: "pointer",
        borderRadius: "4rem",
      }}
    >
      <Card sx={{ height: 250 }} style={{ backgroundColor: "#68D3D4" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Trim desc={details.title} len="40" />
          </Typography>
          <Typography variant="h6" component="div">
            Category:{details.category}
          </Typography>
          <Typography color="white" sx={{ fontSize: 14 }} gutterBottom>
            <Trim desc={details.description} len="105" />
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/publication/${details.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                bgcolor: "black",
                ml: "10px",
                "&:hover": { backgroundColor: "gray" },
              }}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularLoader() {
  return (
    <Box className="container" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

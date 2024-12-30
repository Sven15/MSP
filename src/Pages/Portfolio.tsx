import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 3, height: "100%" }}>
      <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body1" paragraph>
          This page will showcase your portfolio, including successful IT
          security implementations, case studies, or testimonials from your
          clients.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Portfolio;

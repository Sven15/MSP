import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Services: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 3, height: "100%" }}>
      <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Why IT Security Matters for Small Businesses
        </Typography>
        <Typography variant="body1" paragraph>
          Did you know that 43% of cyberattacks target small businesses, yet
          only 14% are prepared to defend themselves? A single breach can cost
          thousands of dollars, harm your reputation, and disrupt operations.
          That’s why we’re here — to make enterprise-grade security and IT
          monitoring accessible to businesses like yours.
        </Typography>
        <Typography variant="h6" gutterBottom>
          What We Offer
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">Proactive IT Security</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Threat Detection & Prevention
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Firewall Management</Typography>
          </li>
          <li>
            <Typography variant="body2">Endpoint Protection</Typography>
          </li>
          <li>
            <Typography variant="body2">Incident Response</Typography>
          </li>
        </ul>
      </Paper>
    </Box>
  );
};

export default Services;

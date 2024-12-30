import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 3, height: "100%" }}>
      <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Your Trusted Partner in IT Security and Monitoring
        </Typography>
        <Typography variant="body1" paragraph>
          At <strong>Your Business Name</strong>, we understand that managing IT
          security and infrastructure can be a challenge for small businesses.
          That’s why we specialize in delivering affordable, reliable, and
          scalable IT solutions tailored to your unique needs.
        </Typography>
        <Typography variant="h6" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="body1" paragraph>
          We provide comprehensive Managed Service Provider (MSP) services to
          ensure your business stays secure, efficient, and ahead of the curve.
        </Typography>
        <Typography variant="body2" paragraph>
          Our core offerings include:
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">Proactive IT Security</Typography>
          </li>
          <li>
            <Typography variant="body2">Real-Time Monitoring</Typography>
          </li>
          <li>
            <Typography variant="body2">Data Backup & Recovery</Typography>
          </li>
          <li>
            <Typography variant="body2">Compliance Support</Typography>
          </li>
        </ul>
      </Paper>
    </Box>
  );
};

export default Home;

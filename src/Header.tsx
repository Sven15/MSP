import React, { useState } from "react";
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Business Name
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            centered
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              ".MuiTabs-indicator": {
                height: "4px", // Thicker indicator for better visibility
              },
            }}
          >
            <Tab
              label="Home"
              component={Link}
              to="/"
              sx={{
                color: value === 0 ? "secondary.main" : "inherit",
                fontWeight: value === 0 ? "bold" : "normal",
              }}
            />
            <Tab
              label="Services"
              component={Link}
              to="/services"
              sx={{
                color: value === 1 ? "secondary.main" : "inherit",
                fontWeight: value === 1 ? "bold" : "normal",
              }}
            />
            <Tab
              label="Portfolio"
              component={Link}
              to="/portfolio"
              sx={{
                color: value === 2 ? "secondary.main" : "inherit",
                fontWeight: value === 2 ? "bold" : "normal",
              }}
            />
            <Tab
              label="Contact"
              component={Link}
              to="/contact"
              sx={{
                color: value === 3 ? "secondary.main" : "inherit",
                fontWeight: value === 3 ? "bold" : "normal",
              }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography color={theme.palette.primary.main} fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Typography
          fontWeight={700}
          color={theme.palette.text.primary}
          sx={{ fontSize: { lg: "144px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile, <br /> and Repeat
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography fontSize="22px" lineHeight="35px" mb={4} color={theme.palette.text.secondary}>
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="#exercises"
          sx={{ padding: "12px 30px", fontSize: '18px' }}
        >
          Explore Exercises
        </Button>
      </motion.div>

      <Typography
        fontWeight={600}
        color={theme.palette.primary.main}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>

      <motion.img 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={HeroBannerImage} 
        alt="banner" 
        className="hero-banner-img" 
      />
    </Box>
  );
};

export default HeroBanner;

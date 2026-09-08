import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, useTheme, Box } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeModeContext } from "../ThemeContext";
import Logo from "../assets/images/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
      }}
      px="20px"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link to="/">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={Logo}
            alt="Logo"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>

        <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
              borderBottom: `3px solid ${theme.palette.primary.main}`,
            }}
          >
            Home
          </Link>

          <a
            href="#exercises"
            style={{ textDecoration: "none", color: theme.palette.text.primary }}
          >
            Exercises
          </a>
        </Stack>
      </Box>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Stack>
  );
};

export default Navbar;

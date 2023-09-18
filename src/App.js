import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExerciseDetail from "./pages.js/ExerciseDetail";
import Home from "./pages.js/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

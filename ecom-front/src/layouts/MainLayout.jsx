// src/layouts/MainLayout.tsx
import { Box } from "@mui/material";
import Headbar from "../components/Headbar";
import Footbar from "../components/Footbar";

export default function MainLayout({ children }) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh" 
      }}
    >
      <header><Headbar /></header>

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <footer><Footbar /></footer>
    </Box>
  );
}

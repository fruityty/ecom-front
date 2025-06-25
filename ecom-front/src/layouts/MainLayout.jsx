// src/layouts/MainLayout.tsx
import { Box, Container } from "@mui/material";
import Headbar from "../components/Headbar";
import Footbar from "../components/Footbar";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: '100%',
      }}
    >
      <header><Headbar /></header>


      <Container
        maxWidth={false}              // <--- disables MUI's preset widths
        disableGutters
        sx={{
          padding: 0,
          maxWidth: "1240px",    // Custom width
          mx: "auto",            // <-- this centers the container horizontally
          flexGrow: 1, // Allows content to fill available vertical space
          py: 3,       // Padding top/bottom for overall content
          // If you want padding on the sides for the entire main content:
          // px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {children}
      </Container>

      <footer><Footbar /></footer>
    </Box>
  );
}

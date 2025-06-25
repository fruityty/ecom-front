import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QuantitySelector({ quantity, setQuantity, min = 1, max = 99 }) {
  const handleDecrease = () => setQuantity(q => Math.max(min, q - 1));
  const handleIncrease = () => setQuantity(q => Math.min(max, q + 1));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#f3f3f3",
        borderRadius: "999px",
        px: 2,
        py: 0.5,
        width: "fit-content",
      }}
    >
      <IconButton size="small" onClick={handleDecrease} sx={{ color: "#222" }}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography sx={{ mx: 1, minWidth: 20, textAlign: "center", fontWeight: 500 }}>
        {quantity}
      </Typography>
      <IconButton size="small" onClick={handleIncrease} sx={{ color: "#222" }}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

import { Grid, Box, Button, Typography } from "@mui/material";
import Slider from '@mui/material/Slider';

export default function FilterSidebar({
    pendingCategory,
    setPendingCategory,
    categories,
    onApply,
}) {
    return (
        <Box
            sx={{
                width: 250,
                p: 2,
                borderRadius: 3,
                bgcolor: "#fff",
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
            }}
        >
            <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        fullWidth
                        sx={{
                            justifyContent: "space-between",
                            mb: 1,
                            borderRadius: 2,
                            color: pendingCategory === cat ? "#fff" : "#222",     // white text when selected, black otherwise
                            bgcolor: pendingCategory === cat ? "#222" : "#F7F7F7", // black background when selected, light gray otherwise
                            fontWeight: pendingCategory === cat ? 700 : 400,
                            border: pendingCategory === cat ? "2px solid #1976d2" : "2px solid transparent",
                            boxShadow: pendingCategory === cat ? 2 : 0,
                            '&:hover': {
                                bgcolor: pendingCategory === cat ? "#1565c0" : "#ececec",
                                color: pendingCategory === cat ? "#fff" : "text.primary",
                            },
                            transition: "all 0.15s",
                            outline: 'none', // removes the browser default blue outline

                        }}
                        variant={pendingCategory === cat ? "contained" : "outlined"}
                        onClick={() => setPendingCategory(cat)}
                    >
                        {cat}
                        <span style={{ fontWeight: "bold" }}>{">"}</span>
                    </Button>
                ))}
            </Box>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    mt: 3,
                    borderRadius: 3,
                    fontWeight: 700,
                    width: "100%",
                    outline: 'none', // removes the browser default blue outline
                    '&:hover': {
                        bgcolor: "#222",
                        color: "#fff",
                    },
                }}
                onClick={onApply}
            >
                Apply Filter
            </Button>
         
        </Box>
    );
}

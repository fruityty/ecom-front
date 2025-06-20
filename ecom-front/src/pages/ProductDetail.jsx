import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  Grid, Box, Typography, Button, Chip, Divider, Stack, IconButton
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { getMockProducts } from "./MockProducts";

const products = getMockProducts(23);

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found.</div>;

  // For gallery: placeholder
  const gallery = product.gallery || [product.image];

  return (
    <MainLayout>
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, p: { xs: 1, md: 2 } }}>
        <Grid container spacing={4}>
          {/* Left: Gallery */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Thumbnails (left column) */}
              <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", gap: 1 }}>
                {gallery.map((img, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={img}
                    alt={`thumb-${idx}`}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      border: "1px solid #eee",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>
              {/* Main Image */}
              <Box
                component="img"
                src={gallery[0]}
                alt={product.name}
                sx={{
                  width: { xs: "100%", sm: 320, md: 400 },
                  height: { xs: 240, sm: 400, md: 420 },
                  objectFit: "cover",
                  borderRadius: 4,
                  background: "#f7f7f7",
                }}
              />
            </Box>
          </Grid>

          {/* Right: Product Info */}
          <Grid item xs={12} md={7}>
            <Box>
              <Typography variant="h4" fontWeight="bold">{product.name}</Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
                <StarIcon sx={{ color: "#FFB800" }} fontSize="small" />
                <Typography fontWeight="bold">4.5</Typography>
                <Typography color="text.secondary">(451)</Typography>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                <Typography variant="h5" fontWeight="bold">{product.price}฿</Typography>
                <Typography sx={{ textDecoration: "line-through", color: "text.secondary" }}>300฿</Typography>
                <Chip label="-40%" color="error" />
              </Box>

              <Typography color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </Typography>

              {/* Colors */}
              <Typography fontWeight={700} sx={{ mt: 1, mb: 0.5 }}>Select Colors</Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ width: 28, height: 28, bgcolor: "#202c34", borderRadius: "50%", border: "2px solid #222" }} />
                <Box sx={{ width: 28, height: 28, bgcolor: "#b8bb9b", borderRadius: "50%" }} />
                <Box sx={{ width: 28, height: 28, bgcolor: "#e5e6eb", borderRadius: "50%" }} />
              </Stack>

              {/* Sizes */}
              <Typography fontWeight={700} sx={{ mt: 1, mb: 0.5 }}>Choose Size</Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Button variant="outlined" size="small">Small</Button>
                <Button variant="outlined" size="small">Medium</Button>
                <Button variant="contained" size="small" color="primary">Large</Button>
                <Button variant="outlined" size="small">X-Large</Button>
              </Stack>

              {/* Quantity + Add to Cart */}
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: 2 }}>
                  <IconButton size="small" onClick={() => setQuantity(q => Math.max(1, q - 1))}><RemoveIcon /></IconButton>
                  <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                  <IconButton size="small" onClick={() => setQuantity(q => q + 1)}><AddIcon /></IconButton>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 3, minWidth: 200 }}
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Tabs and reviews section */}
        <Box sx={{ mt: 6 }}>
          {/* Tab Bar */}
          <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
            <Button sx={{ fontWeight: "bold", borderBottom: "3px solid #222", borderRadius: 0 }}>Product Details</Button>
            <Button sx={{ color: "#333" }}>Rating & Reviews</Button>
            <Button sx={{ color: "#333" }}>FAQs</Button>
          </Stack>
          {/* Dummy reviews grid */}
          <Box sx={{ mt: 3 }}>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>All Reviews (451)</Typography>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((idx) => (
                <Grid item xs={12} sm={6} md={6} key={idx}>
                  <Box sx={{ p: 2, borderRadius: 3, bgcolor: "#fafafa", boxShadow: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <StarIcon sx={{ color: "#FFB800" }} fontSize="small" />
                      <Typography fontWeight="bold">5.0</Typography>
                      <Typography fontWeight="bold" color="primary">Samantha D.</Typography>
                    </Stack>
                    <Typography sx={{ mb: 1 }}>“I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable...”</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 13 }}>Posted on August 14, 2023</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button variant="outlined" sx={{ mt: 3 }}>Load More Reviews</Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

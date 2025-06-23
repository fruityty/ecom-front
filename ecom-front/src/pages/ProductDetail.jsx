import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  Box, Typography, Button, Chip, Stack, IconButton
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

  // calculate price
  let discountedPrice = Math.floor(product.price * (product.salePercentage / 100));
  let displayPrice = product.price - discountedPrice;

  if (!product) return <div>Product not found.</div>;

  // For gallery: placeholder
  const gallery = product.gallery || [product.image];

  return (
    <MainLayout>
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, p: { xs: 1, md: 2 } }}>
        {/* Responsive Flex Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Left: Gallery */}
          <Box
            sx={{
              flex: { xs: "none", md: "0 0 40%" },
              width: { xs: "100%", md: 480 },
              mb: { xs: 3, md: 0 },
              display: "flex",
              gap: 2,
            }}
          >
            {/* Thumbnails */}
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

          {/* Right: Product Info */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h4" fontWeight="bold">{product.name}</Typography>

            {/* Product Price */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
              <Typography variant="h5" fontWeight="bold">{displayPrice}฿</Typography>
              {product.salePercentage > 0 && (
                <>
                  <Typography
                    sx={{ textDecoration: "line-through", color: "text.disabled", ml: 1 }}
                  >
                    {product.price}฿
                  </Typography>
                  <Chip label={`-${product.salePercentage}%`} color="error" sx={{ ml: 1 }} />
                </>
              )}
            </Box>

            <Typography color="text.secondary" sx={{ mt: 2, mb: 2 }}>
              {product.description}
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
        </Box>
      </Box>
    </MainLayout>
  );
}

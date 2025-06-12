import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const products = [
  { id: 1, name: "T-shirt", price: 300, image: "https://picsum.photos/200?random=1" },
  { id: 2, name: "Jeans", price: 700, image: "https://picsum.photos/200?random=2" },
  { id: 3, name: "Sneakers", price: 1500, image: "https://picsum.photos/200?random=3" },
  // Add a few more…
];

export default function ProductListPage() {
  return (
    <MainLayout>
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
    </MainLayout>
  );
}

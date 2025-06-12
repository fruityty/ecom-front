import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const products = [
  { id: 1, name: "T-shirt", price: 300, image: "https://picsum.photos/200?random=1" },
  { id: 2, name: "Jeans", price: 700, image: "https://picsum.photos/200?random=2" },
  { id: 3, name: "Sneakers", price: 1500, image: "https://picsum.photos/200?random=3" },
  // Add a few more…
];

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">{product.price}฿</Typography>
      </CardContent>
    </Card>
  );
}

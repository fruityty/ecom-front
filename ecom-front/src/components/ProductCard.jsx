import { Card, CardMedia, CardContent, Typography } from "@mui/material";



export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        height: '100%', // Make card take full height of grid item
        display: 'flex',
        flexDirection: 'column',
        width: {xs: "172px", md: "281px"},
        borderRadius: '8px',
        boxShadow: 3, // Add some shadow for depth
        transition: 'transform 0.2s ease-in-out', // Smooth hover effect
        '&:hover': {
          transform: 'translateY(-5px)', // Lift on hover
        },
      }}>
      <CardMedia
        component="img"
        sx={{
          height: { xs: 150, sm: 180, md: 200 }, // Responsive image height
          width: '100%', // Image takes full width of its container
          objectFit: 'cover', // Ensures image covers the area nicely
          borderRadius: '8px 8px 0 0', // Rounded top corners
          
        }}
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis', // Adds "..." to indicate truncated text
          width: { xs: '100%', md: '100%' },
        }}>{product.name}</Typography>
        <Typography color="text.secondary">{product.price}฿</Typography>
      </CardContent>
    </Card>
  );
}

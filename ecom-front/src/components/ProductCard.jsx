import {
  Card, CardMedia, Box,
  CardContent, Typography, Link, Chip
} from "@mui/material";



export default function ProductCard({ product, addToCart }) {

  // calculate price
  let discountedPrice = Math.floor(product.price * (product.salePercentage / 100));
  let displayPrice = product.price - discountedPrice;


  return (
    <Card
      sx={{
        height: '100%', // Make card take full height of grid item
        display: 'flex',
        flexDirection: 'column',
        width: { xs: "172px", md: "281px" },
        borderRadius: '8px',
        boxShadow: 3, // Add some shadow for depth
        transition: 'transform 0.2s ease-in-out', // Smooth hover effect
        '&:hover': {
          transform: 'translateY(-5px)', // Lift on hover
        },
      }}>
      <Link to={`/product/${product.id}`}>
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
            color: 'text.secondary',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis', // Adds "..." to indicate truncated text
            width: { xs: '100%', md: '100%' },
          }}>{product.name}
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}>
            <Typography color="text.secondary">{displayPrice}฿</Typography>
            {product.salePercentage > 0 && (
              <>
                <Typography
                  sx={{ textDecoration: "line-through", 
                    color: "text.disabled", ml: 1 }}
                >
                  {product.price}฿
                </Typography>
                <Chip label={`-${product.salePercentage}%`} color="error" sx={{ 
                  ml: 1,
                  textDecoration: 'none', }} />
              </>
            )}
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
}

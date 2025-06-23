import React from "react";
import { useCart } from '../context/CartContext';
import {
  Card, CardMedia, Box,
  CardContent, Typography, Link, Chip, Divider
} from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <MainLayout>


      {/* Body Box  */}
      <Box sx={{ display: 'flex' }}>

        {/* Product and Quantity Box */}
       <Box sx={{
      width: { xs: `358px`, md: `715px` },
      px: '24px',
      py: '20px',
      backgroundColor: 'wheat',
    }}>
      {cart.map((item, idx) => (
        <React.Fragment key={item.product.id}>
          {/* Only add top margin if not the first item */}
          <Box
            sx={{
              width: { xs: `330px`, md: `667px` },
              height: { xs: `100px`, md: `125px` },
              // mt: idx === 0 ? 0 : { md: '12px' }, // 12px top margin except first
              mb: 0, // bottom margin handled by divider/gap
              display: 'flex',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: { xs: '100px', md: '124px' },
                width: { xs: '100px', md: '124px' },
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
                mr: { xs: '14px', md: '16px' },
              }}
              image={item.product.image}
              alt={item.product.name}
            />
            <Box sx={{ flex: '1' }}>
              <Typography sx={{ fontSize: { xs: '16px', md: '20px' } }}>{item.product.name}</Typography>
              <Typography sx={{ fontSize: { xs: '12px', md: '14px' } }}>Size: {item.product.name}</Typography>
              <Typography sx={{ fontSize: { xs: '12px', md: '14px' } }}>Color: {item.product.name}</Typography>
              <Typography sx={{ fontSize: { xs: '20px', md: '24' }, fontWeight: 'bold' }}>฿{item.product.price} </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </Box>
          </Box>
          {/* Add Divider + gap only between items */}
          {idx !== cart.length - 1 && (
            <>
              <Box sx={{ height: { xs: 12, md: '12px' } }} /> {/* 12px gap */}
              <Divider />
              <Box sx={{ height: { xs: 12, md: '12px' } }} /> {/* 12px gap */}
            </>
          )}
        </React.Fragment>
      ))}
    </Box>

        {/* Order Summary Box */}
        <Box>
          <Typography>
            Order Summary
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  )
}
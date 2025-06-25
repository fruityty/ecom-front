import React from "react";
import { useState } from "react";
import { useCart } from '../context/CartContext';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Card, CardMedia, Box,
  CardContent, Typography, Link, Chip, Divider, IconButton
} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import QuantitySelector from '../components/QuantitySelector'


export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate subtotal and discount
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const totalDiscount = Math.floor(cart.reduce(
    (acc, item) =>
      acc +
      (item.product.price * (item.product.salePercentage || 0) / 100) * item.quantity,
    0
  ));
  const total = subtotal - totalDiscount



  return (
    <MainLayout>


      {/* Body Box  */}
      <Box sx={{ display: 'flex', padding: 0, justifyContent: 'space-between' }}>

        {/* Product and Quantity Box */}
        <Box sx={{
          width: { xs: `358px`, md: `715px` },
          px: '24px',
          py: '20px',
          // backgroundColor: 'wheat',
          border: '1px solid',
          borderColor: "#D3D3D3",
          borderRadius: 3,
        }}>
          {cart.length === 0 ? (
            <Box sx={{
              height: '100%',
              // backgroundColor: "red",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography sx={{ fontSize: '24px' }}>🛒 Your cart is empty</Typography>
            </Box>
          ) :
            cart.map((item, idx) => (
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

                    <Box sx={{ display: 'flex', gap: 1, mt: 5 }}>
                      <Typography sx={{ fontSize: { xs: '20px', md: '24px' }, fontWeight: 'bold' }}>
                        ฿{Math.floor(item.product.price - (item.product.price*item.product.salePercentage/100))}
                      </Typography>
                      {item.product.salePercentage > 0 && (
                        <>
                          <Typography
                            sx={{
                              fontSize: { xs: '20px', md: '24px' },
                              textDecoration: "line-through",
                              color: "text.disabled",
                              ml: 1
                            }}
                          >
                            {item.product.price}฿
                          </Typography>
                          <Chip label={`-${item.product.salePercentage}%`} color="error" sx={{ ml: 1 }} />
                        </>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: '100%',
                  }}>
                    <DeleteForeverOutlinedIcon
                      sx={{ color: 'error.main', cursor: 'pointer' }} // use 'error.main' for theme color
                      onClick={() => removeFromCart(item.product.id)}
                    />
                    {/* Quantity Selector */}
                    <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #eee", borderRadius: 2 }}>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
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
        <Box sx={{
          width: { xs: `358px`, md: `505px` },
          height: { xs: `290px`, md: `320px` },
          px: '24px',
          py: '20px',
          // backgroundColor: 'aqua',
          border: '1px solid',
          borderColor: "#D3D3D3",
          borderRadius: 3,
        }}>
          <Typography sx={{ fontSize: { xs: '20px', md: '24px' }, color: "#333" }}>
            Order Summary
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "text.disabled" }}>
              Subtotal
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "#333" }}>
              ฿{subtotal}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "text.disabled" }}>
              Discount
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "error.main" }}>
              -฿{totalDiscount}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "text.disabled" }}>
              Delivery Fee
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "#333" }}>
              ฿50
            </Typography>
          </Box>
          <Divider sx={{ my: '12px' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "#333" }}>
              Total
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, color: "#333" }}>
              ฿{total}
            </Typography>
          </Box>
          <button
            className="apply-button"
          // onClick={onApply}
          >
            Go to Checkout
          </button>
        </Box>
      </Box>
    </MainLayout>
  )
}
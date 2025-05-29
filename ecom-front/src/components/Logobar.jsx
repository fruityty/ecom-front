import * as React from 'react';
import { Container, Box } from '@mui/material';
import versace from '../assets/brands_logo/versace-logo-1.png';
import zara from '../assets/brands_logo/zara-logo-1.png';
import gucci from '../assets/brands_logo/gucci-logo-1.png';
import prada from '../assets/brands_logo/prada-logo-1.png';
import ck from '../assets/brands_logo/ck-logo-1.png';

const itemData = [
  { url: versace, title: 'versace' },
  { url: zara, title: 'zara' },
  { url: gucci, title: 'gucci' },
  { url: prada, title: 'prada' },
  { url: ck, title: 'ck' },
];

export default function Logobar() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        bgcolor: 'black',
        width: '100vw',
        height: {
          xs: 146,
          md: 122,
        },
        p: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100%', 
        }}
      >
        {itemData.map((item) => (
          <img
            key={item.title}
            src={item.url}
            alt={item.title}
            style={{ maxHeight: 60 }} // adjust as needed
          />
        ))}
      </Box>
    </Container>
  );
}

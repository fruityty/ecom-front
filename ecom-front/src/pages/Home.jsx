import MainLayout from "../layouts/MainLayout";
import Logobar from "../components/Logobar";
import { Container, Box } from '@mui/material';
import cover from "../assets/cover.jpg"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <MainLayout>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '16/9', // or use the image's real aspect ratio
          width: '100%',
          maxHeight: '700px',
          pt: {
            xs: 4,    // theme.spacing(4) = 32px (default spacing unit is 8px)
            md: 25, // 12.5 * 8 = 100px
          },
          pb: {
            xs: 4,
            md: 25,
          },
          px: {
            xs: 2,    // 16px
            md: '6.9%', // 100px
          },
        }}
      >
        <Typography
          variant="h2"

          sx={{
            mr: 2,
            fontFamily: 'roboto',
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 64,
            lineHeight: 1.0, // You can adjust this value
          }}
        >
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </Typography>

        <Typography>
          Browse through our diverse range of meticulously crafted garments, designed <br />
          to bring out your individuality and cater to your sense of style.
        </Typography>

        <Button
          sx={{
            width: '200px',              // custom width
            height: '50px',              // custom height
            backgroundColor: '#000',     // background color
            color: '#fff',               // text color
            borderRadius: '50px',        // fully rounded corners (pill shape)
            textTransform: 'none',       // optional: keep original casing
            '&:hover': {
              backgroundColor: '#333',   // hover effect (optional)
            },
          }}
        >
          Shop Now
        </Button>

      </Box>
      <Box>
        <Logobar></Logobar>
      </Box>
    </MainLayout>
  );
}